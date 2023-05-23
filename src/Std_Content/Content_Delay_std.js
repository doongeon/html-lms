import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Content_Delay_std() {
    
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
    <div class="col-lg-6 mb-4">
      {/* 학생 Delay 부분 */}
      <div class="card shadow mb-4">
          <div class="card-header py-3">
              <h3 class="m-0 font-weight-bold text-primary">Delay</h3>
          </div>
          <div class="card-body">
              
                  {dataList?.map((data, index) => (
                    <form>
                        <input type="checkbox" id="option1" name="option1" value="option1"></input>
                        <label>
                            { data.id } { data.email } { data.password } { data.name } { data.phoneNumber }
                        </label>
                    </form>
                  ))}
                  {/* 어떤 데이터가 와야할지 모르겠음 */}

          </div>
      </div>
  </div>
  )
}
export default Content_Delay_std;