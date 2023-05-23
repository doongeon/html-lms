<<<<<<< HEAD
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Content_info_std() {
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
                'http://43.201.105.84:3000/notices/' // Backend api 개별로 받기위해서 학생 id로 개별 요청
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
    <div class="row">

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div class="col-xl-12 col-md-12 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-header py-3">
                    <h3 class="m-0 font-weight-bold text-warning">알림</h3>
                </div>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {dataList?.map((data, index) => (
                                <form>
                                    <label>
                                        { data.context } 
                                    </label>
                                </form>
                            ))}
                            </div>
                        </div>
                        <div class="col-auto">
                            {/* <!-- <i class="fas fa-calendar fa-2x text-gray-300"></i> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
=======
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Content_info_std() {
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
                'http://43.201.105.84:3000/notices/' // Backend api 개별로 받기위해서 학생 id로 개별 요청
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
    <div class="row">

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div class="col-xl-12 col-md-12 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-header py-3">
                    <h3 class="m-0 font-weight-bold text-warning">알림</h3>
                </div>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {dataList?.map((data, index) => (
                                <form>
                                    <label>
                                        { data.context } 
                                    </label>
                                </form>
                            ))}
                            </div>
                        </div>
                        <div class="col-auto">
                            {/* <!-- <i class="fas fa-calendar fa-2x text-gray-300"></i> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
export default Content_info_std;