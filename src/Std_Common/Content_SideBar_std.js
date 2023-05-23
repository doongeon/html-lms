<<<<<<< HEAD
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Content_SideBar_std() {
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
              'https://494f28fe-80a6-4d36-9cec-5b3a50cd7b3d.mock.pstmn.io/academies' // Backend api
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
    // <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <Link to='/Student'>
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
                {dataList?.map((data, index) => (
                        <label>
                              { data.name }  
                              {/* 학원 이름 가져옴 (한개만 가져와야함)*/}
                        </label>
                  ))}</div> 
        </a>
        </Link>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0"></hr>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
            <Link to='/Student'>
            <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Home</span></a>
            </Link>
        </li>


        {/* <!-- Divider --> */}
        <hr class="sidebar-divider"></hr>

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">
            List
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
            <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>학습 결과</span></a>
        </li>
        {/* <!-- Nav Item - Charts --> */}
        <li class="nav-item">
            <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>약점 공략</span></a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li class="nav-item">
            
            <Link to='/Student/Lecture'>
            <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>강의 자료</span></a>
            </Link>
                
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block"></hr>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."></img>
            <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>

    </ul>
  )
}
=======
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Content_SideBar_std() {
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
              'https://494f28fe-80a6-4d36-9cec-5b3a50cd7b3d.mock.pstmn.io/academies' // Backend api
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
    // <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <Link to='/Student'>
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
                {dataList?.map((data, index) => (
                        <label>
                              { data.name }  
                              {/* 학원 이름 가져옴 (한개만 가져와야함)*/}
                        </label>
                  ))}</div> 
        </a>
        </Link>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0"></hr>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
            <Link to='/Student'>
            <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Home</span></a>
            </Link>
        </li>


        {/* <!-- Divider --> */}
        <hr class="sidebar-divider"></hr>

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">
            List
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
            <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>학습 결과</span></a>
        </li>
        {/* <!-- Nav Item - Charts --> */}
        <li class="nav-item">
            <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>약점 공략</span></a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li class="nav-item">
            
            <Link to='/Student/Lecture'>
            <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>강의 자료</span></a>
            </Link>
                
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block"></hr>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."></img>
            <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>

    </ul>
  )
}
>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
export default Content_SideBar_std;