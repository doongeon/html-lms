import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Lecture_NOT_Finish_std() {
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
                'https://494f28fe-80a6-4d36-9cec-5b3a50cd7b3d.mock.pstmn.io/lectures' // Backend api classroom_id로 개별 정보 받아오기
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
    return (
      <div class="card-body">
        {dataList?.map((data, index) => (
          <form>
              
                <Link to='/Student/Lecture/Video'>
                  <a class="nav-link" href="index.html">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>{ data.title } - {data.link}</span></a>
                </Link>  
              
          </form>
        ))}
      </div>
    )
  }
  export default Lecture_NOT_Finish_std;