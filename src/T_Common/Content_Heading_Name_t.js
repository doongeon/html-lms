import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Content_Heading_Name_t() {
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
              'http://43.201.105.84:3000/members/teachers' // Backend api
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
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Hello! {dataList?.map((data, index) => (
                        <label>
                              { data.name }  
                              {/* 완료 */}
                        </label>
                  ))}</h1>
    </div>
  )
}
export default Content_Heading_Name_t;