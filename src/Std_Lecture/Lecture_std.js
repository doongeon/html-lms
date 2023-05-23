<<<<<<< HEAD
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar from '../Std_Common/Content_TopBar_std';
import Content_Heading_Name_std from '../Std_Common/Content_Heading_Name_std';
import Content_Footer_std from '../Std_Common/Content_Footer_std';
import Lecture_Finish_std from './Lecture_Finish_std';
import Lecture_Not_Finish_std from './Lecture_Not_Finish_std';

function Lecture_std() {
  
  return (
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* TopBar */}
            <Content_TopBar></Content_TopBar>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

                {/* 헤딩 이름 부분 */}
                <Content_Heading_Name_std></Content_Heading_Name_std>
                
                {/* <!-- Content Row --> */}
                <div class="row">
                    {/* 강의 목록 */}
                    <div class="col-xl-12 col-md-12 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-header py-3">
                                <h3 class="m-0 font-weight-bold text-warning">강의 목록</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    {/* <!-- Content Column --> */}
                                    <div class="col-lg-6 my-2">
            
                                        <div class="card shadow my-4">
                                            <div class="card-header py-3">
                                                <h3 class="m-0 font-weight-bold text-primary">finish</h3>
                                            </div>
                                            
                                            {/* 시청한 강의 */}
                                            <Lecture_Finish_std></Lecture_Finish_std>

                                        </div>
                                    </div>
            
                                    <div class="col-lg-6 my-2">
            
                                        <div class="card shadow my-4">
                                            <div class="card-header py-3">
                                                <h3 class="m-0 font-weight-bold text-primary">not finish</h3>
                                            </div>
                                            
                                            {/* 시청안한 강의 */}
                                            <Lecture_Not_Finish_std></Lecture_Not_Finish_std>

                                        </div>
            
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <Content_Footer_std></Content_Footer_std>
        {/* <!-- End of Footer --> */}

    </div>
  )
}
=======
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar from '../Std_Common/Content_TopBar_std';
import Content_Heading_Name_std from '../Std_Common/Content_Heading_Name_std';
import Content_Footer_std from '../Std_Common/Content_Footer_std';
import Lecture_Finish_std from './Lecture_Finish_std';
import Lecture_Not_Finish_std from './Lecture_Not_Finish_std';

function Lecture_std() {
  
  return (
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* TopBar */}
            <Content_TopBar></Content_TopBar>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

                {/* 헤딩 이름 부분 */}
                <Content_Heading_Name_std></Content_Heading_Name_std>
                
                {/* <!-- Content Row --> */}
                <div class="row">
                    {/* 강의 목록 */}
                    <div class="col-xl-12 col-md-12 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-header py-3">
                                <h3 class="m-0 font-weight-bold text-warning">강의 목록</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    {/* <!-- Content Column --> */}
                                    <div class="col-lg-6 my-2">
            
                                        <div class="card shadow my-4">
                                            <div class="card-header py-3">
                                                <h3 class="m-0 font-weight-bold text-primary">finish</h3>
                                            </div>
                                            
                                            {/* 시청한 강의 */}
                                            <Lecture_Finish_std></Lecture_Finish_std>

                                        </div>
                                    </div>
            
                                    <div class="col-lg-6 my-2">
            
                                        <div class="card shadow my-4">
                                            <div class="card-header py-3">
                                                <h3 class="m-0 font-weight-bold text-primary">not finish</h3>
                                            </div>
                                            
                                            {/* 시청안한 강의 */}
                                            <Lecture_Not_Finish_std></Lecture_Not_Finish_std>

                                        </div>
            
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <Content_Footer_std></Content_Footer_std>
        {/* <!-- End of Footer --> */}

    </div>
  )
}
>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
export default Lecture_std;