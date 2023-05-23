import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ClassPlus_Table_t() {
    const [cname, setCname] = useState('');
    const [teacher, setTeacher] = useState('');
    const [school, setSchool] = useState('');
    const [age, setAge] = useState('');
  
    const handleAddRow = () => {
      if (age === '0') {
        alert('Please select age.');
        return;
      }
  
      const table = document.getElementById('userTable');
      const row = table.insertRow(-1);
      const cnameCell = row.insertCell(0);
      const teacherCell = row.insertCell(1);
      const schoolCell = row.insertCell(2);
      const ageCell = row.insertCell(3);
      cnameCell.innerHTML = cname;
      teacherCell.innerHTML = teacher;
      schoolCell.innerHTML = school;
      ageCell.innerHTML = age;
    };
    

  return (
    <div class="card-body">
        <table className="table table-bordered" id="userTable" width="100%" cellSpacing="0">
            <thead>
                <tr>
                <th>Class</th>
                <th>Teacher</th>
                <th>학교</th>
                <th>학년</th>
                <th>추가</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><input type="text" id="cname" name="cname" value={cname} onChange={(e) => setCname(e.target.value)} /></td>
                <td><input type="text" id="teacher" name="teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)} /></td>
                <td>
                    <select id="school" name="school" value={school} onChange={(e) => setSchool(e.target.value)}>
                    <option value="0">Select school</option>
                    <option value="초등">초등</option>
                    <option value="중등">중등</option>
                    <option value="고등">고등</option>
                    </select>
                </td>
                <td>
                    <select id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)}>
                    <option value="0">Select Age</option>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    </select>
                </td>
                <td><input type="button" value="Add" onClick={handleAddRow} /></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
export default ClassPlus_Table_t;
