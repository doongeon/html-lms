import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function StudentPlus_Table_t() {
    const [students, setStudents] = useState([]);
    const [sname, setSname] = useState('');
    const [school, setSchool] = useState('0');
    const [grade, setGrade] = useState('0');
    const [classValue, setClassValue] = useState('0');
    const [teacher, setTeacher] = useState('0');
    const [firstRegisterDate, setFirstRegisterDate] = useState('');
  
    const addRow = () => {
      if (grade === '0') {
        alert('Please select grade.');
        return;
      }
  
      const newStudent = {
        sname,
        school,
        grade,
        class: classValue,
        teacher,
        firstRegisterDate,
      };
  
      setStudents([...students, newStudent]);
      clearForm();
    };
  
    const clearForm = () => {
      setSname('');
      setSchool('0');
      setGrade('0');
      setClassValue('0');
      setTeacher('0');
      setFirstRegisterDate('');
    };
    

  return (
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-striped table-bordered" id="userTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>학생명</th>
                        <th>학교</th>
                        <th>학년</th>
                        <th>소속반</th>
                        <th>담당교사</th>
                        <th>등원일</th>
                        <th>추가</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.sname}</td>
                    <td>{student.school}</td>
                    <td>{student.grade}</td>
                    <td>{student.class}</td>
                    <td>{student.teacher}</td>
                    <td>{student.firstRegisterDate}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                        <input type="text" value={sname} onChange={e => setSname(e.target.value)} />
                        </td>
                        <td>
                        <select value={school} onChange={e => setSchool(e.target.value)}>
                            <option value="0">Select school</option>
                            <option value="초등">초등</option>
                            <option value="중등">중등</option>
                            <option value="고등">고등</option>
                        </select>
                        </td>
                        <td>
                        <select value={grade} onChange={e => setGrade(e.target.value)}>
                            <option value="0">Select Age</option>
                            <option value="1학년">1학년</option>
                            <option value="2학년">2학년</option>
                            <option value="3학년">3학년</option>
                        </select>
                        </td>
                        <td>
                        <select value={classValue} onChange={e => setClassValue(e.target.value)}>
                            <option value="0">Select Class</option>
                            <option value="Class2">Class2</option>
                            <option value="Class3">Class3</option>
                            <option value="Class4">Class4</option>
                            </select>
                        </td>
                        <td>
                            <select value={teacher} onChange={e => setTeacher(e.target.value)}>
                            <option value="0">Select Teacher</option>
                            <option value="이효정">이효정</option>
                            <option value="김병원">김병원</option>
                            <option value="고석주">고석주</option>
                            <option value="안병준">안병준</option>
                            </select>
                        </td>
                        <td>
                            <input
                            type="date"
                            value={firstRegisterDate}
                            onChange={e => setFirstRegisterDate(e.target.value)}
                            placeholder="YYYY-MM-DD"
                            />
                        </td>
                        <td>
                            <input type="button" value="Add" onClick={addRow} />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
                );
}
export default StudentPlus_Table_t;
