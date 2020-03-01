import React from "react";
import PropTypes from 'prop-types';
import "../styles/StudentsList.css";

function StudentsList({ students, sortBy, deleteStudent }) {
  
  return (
    <table className="centered striped">
      <thead>
        <tr>
          <th>№ п/п</th>
          <th>
            <span className="sort" onClick={() => sortBy("name")}>
              Фамилия, Имя
            </span>
          </th>
          <th>
            <span className="sort" onClick={() => sortBy("rating")}>
              Рейтинг
            </span>
          </th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.rating}</td>
            <td>
              <button
                className="btn-floating btn-small red accent-4"
                onClick={() => deleteStudent(student.id)}
              >
                <i className="material-icons">delete</i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentsList;

StudentsList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object),
  sortBy: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};
