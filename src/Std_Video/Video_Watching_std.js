<<<<<<< HEAD
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Video_Watching_std() {
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
    <div class="col-xl-12 col-md-12 mb-4">
        <div class="card border-left-warning shadow h-800 py-2">
            <div class="card-header py-3">
                <h3 class="m-0 font-weight-bold text-warning">강의</h3>
            </div>
            <div class="card-body text-center">
                {dataList?.map((data, index) => (
                    <div style={{width: '100%', maxWidth: '800px', height: '500px', textAlign: 'center'}}>
                    <iframe
                        width="100%"
                        height="100%"
                        // src="https://www.youtube.com/embed/fAe_Boxk61Q"
                        src= {data.link}
                        // 강의 하나만 불러오게 해야함
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
=======
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Video_Watching_std() {
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
    <div class="col-xl-12 col-md-12 mb-4">
        <div class="card border-left-warning shadow h-800 py-2">
            <div class="card-header py-3">
                <h3 class="m-0 font-weight-bold text-warning">강의</h3>
            </div>
            <div class="card-body text-center">
                {dataList?.map((data, index) => (
                    <div style={{width: '100%', maxWidth: '800px', height: '500px', textAlign: 'center'}}>
                    <iframe
                        width="100%"
                        height="100%"
                        // src="https://www.youtube.com/embed/fAe_Boxk61Q"
                        src= {data.link}
                        // 강의 하나만 불러오게 해야함
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
export default Video_Watching_std;