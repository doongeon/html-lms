<<<<<<< HEAD
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Content_SideBar_t() {
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
                'https://494f28fe-80a6-4d36-9cec-5b3a50cd7b3d.mock.pstmn.io/academies' // Backend api 학원 정보 가져옴
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
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link to='/Teacher'>
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
                <Link to='/Teacher'>
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span></a>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                관리
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>반 관리</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <Link to='/Teacher/ClassList'>
                        <a class="collapse-item" href="t-class.html">반 목록</a>
                        </Link>
                        <Link to='/Teacher/ClassPlus'>
                        <a class="collapse-item" href="t-class+.html">반 추가</a>
                        </Link>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>학생 관리</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <Link to='/Teacher/StudentList'>
                        <a class="collapse-item" href="utilities-color.html">학생 목록</a>
                        </Link>
                        <Link to='/Teacher/StudentPlus'>
                        <a class="collapse-item" href="utilities-border.html">학생 추가</a>
                        </Link>
                    </div>
                </div>
            </li>

            

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                자료
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>강의</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <Link to='/Teacher/Lecture'>
                        <a class="collapse-item" href="t-lecture-list.html">강의 목록</a>
                        </Link>
                        <Link to='/Teacher/LecturePlus'>
                        <a class="collapse-item" href="t-lecture+.html">강의 추가</a>
                        </Link>
                    </div>
                </div>

                <li class="nav-item">
                    <Link to='/Teacher/WordList'>
                    <a class="nav-link" href="tables.html">
                        <i class="fas fa-fw fa-table"></i>
                        <span>단어</span></a>
                    </Link> 
                </li>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            

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

function Content_SideBar_t() {
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
                'https://494f28fe-80a6-4d36-9cec-5b3a50cd7b3d.mock.pstmn.io/academies' // Backend api 학원 정보 가져옴
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
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link to='/Teacher'>
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
                <Link to='/Teacher'>
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span></a>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                관리
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>반 관리</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <Link to='/Teacher/ClassList'>
                        <a class="collapse-item" href="t-class.html">반 목록</a>
                        </Link>
                        <Link to='/Teacher/ClassPlus'>
                        <a class="collapse-item" href="t-class+.html">반 추가</a>
                        </Link>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>학생 관리</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <Link to='/Teacher/StudentList'>
                        <a class="collapse-item" href="utilities-color.html">학생 목록</a>
                        </Link>
                        <Link to='/Teacher/StudentPlus'>
                        <a class="collapse-item" href="utilities-border.html">학생 추가</a>
                        </Link>
                    </div>
                </div>
            </li>

            

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                자료
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>강의</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <Link to='/Teacher/Lecture'>
                        <a class="collapse-item" href="t-lecture-list.html">강의 목록</a>
                        </Link>
                        <Link to='/Teacher/LecturePlus'>
                        <a class="collapse-item" href="t-lecture+.html">강의 추가</a>
                        </Link>
                    </div>
                </div>

                <li class="nav-item">
                    <Link to='/Teacher/WordList'>
                    <a class="nav-link" href="tables.html">
                        <i class="fas fa-fw fa-table"></i>
                        <span>단어</span></a>
                    </Link> 
                </li>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            

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
export default Content_SideBar_t;