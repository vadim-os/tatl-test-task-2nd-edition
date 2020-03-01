import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

import PopUp from "./components/PopUp";
import StudentsList from "./components/StudentsList";

function App() {
  const [students, setStudents] = useState([]);
  const [popup, setPopup] = useState(false);
  const [isSortedBy, setSortedBy] = useState(null);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const togglePopUp = () => {
    setPopup(popup => !popup);
  };

  const addStudent = (name, rating) => {
    setStudents(students => [
      ...students,
      {
        id: uuidv1(),
        name,
        rating
      }
    ]);
    togglePopUp();
  };

  const sortBy = field => {
    if (field === isSortedBy) {
      setStudents(students => [...students].reverse());
    } else {
      switch (field) {
        case "name":
          setStudents(students =>
            [...students].sort((a, b) => a.name.localeCompare(b.name))
          );
          break;
        case "rating":
          setStudents(students =>
            [...students].sort((a, b) => a.rating - b.rating)
          );
          break;
        default:
          setStudents(students => [...students].sort((a, b) => a.id - b.id));
      }
      setSortedBy(field);
    }
  };

  const deleteStudent = id => {
    setStudents(students => students.filter(student => student.id !== id));
  };

  return (
    <div className="App">
      <h1>TATL test task</h1>
      <button className="btn" onClick={togglePopUp}>
        Добавить запись
      </button>
      <hr />

      {popup && <PopUp togglePopUp={togglePopUp} addStudent={addStudent} />}

      {!!students.length && (
        <StudentsList
          students={students}
          sortBy={sortBy}
          deleteStudent={deleteStudent}
        />
      )}

      {!students.length && <h4>Пока записей нет</h4>}
    </div>
  );
}

export default App;
