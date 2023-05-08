/**
 * written by donggeon
 * 
 * not done yet
 * don't use it!!!!!!!
 * 
 */



import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DataList() {
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataList = async () => { 
    try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setDataList(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
            'http://localhost:4000/api/todo' // Backend api
        );
        setDataList(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
        setError(e);
    }
    setLoading(false);
};

  useEffect(() => { // 한번만 렌더하기 위해서
      fetchDataList();
  }, []);
  
  const onSubmitHandler = async (e) => { // 동기함수로 선언
    e.preventDefault(); // 원래 기능 막음
    const text = e.target.text.value;
    const done = e.target.done.checked;

    await axios.post('http://localhost:4000/api/todo', { text, done }); // 기다리기
    fetchDataList();
    document.getElementById("myForm").reset();
  }

  return (
    <div className='TodoList'>
      <div>
        <h1>Todo List</h1>
      </div>
      
      <form id='myForm' onSubmit={onSubmitHandler}>
        <input name='text' />
        <input name='done' type='checkBox' />
        <button type='submit'>add</button>
      </form>

      <ul>
        {dataList?.map(data => (
          <li key={data.id}>
            { data.id } { data.text } { data.done ? 'checked' : 'notCheked' }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataList;