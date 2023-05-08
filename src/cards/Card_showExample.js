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
            'https://494f28fe-80a6-4d36-9cec-5b3a50cd7b3d.mock.pstmn.io/members/teachers' // Backend api
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
    <div class="card shadow my-4">
        <div class="card-header py-3">
            <h3 class="m-0 font-weight-bold text-primary">finish</h3>
        </div>
        <div class="card-body">
            <form>
                {dataList?.map((data, index) => (
                    <input type={index} id= {index} name= "" value= {data.id} >
                        <label for= {index}>
                            { data.id } { data.email } { data.password } { data.name } { data.phoneNumber }
                        </label>
                    </input>
                ))}
            </form>
        </div>
    </div>
  )
}

export default DataList;