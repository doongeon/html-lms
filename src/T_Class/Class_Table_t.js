import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Class_Table_t() {
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
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Class List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>School</th>
                            <th>Class Name</th>
                            <th>Teacher</th>
                            <th># of Student</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {dataList?.map((data, index) => (
                            <tr>
                            <td>{ data.id }</td>
                            <td>{ data.name }</td>
                            <td>{ data.password }</td>
                            <td>{ data.phoneNumber }</td>
                            <td>{data.age}</td>
                            </tr>    
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default Class_Table_t;
