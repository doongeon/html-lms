import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar from '../Std_Common/Content_TopBar_std';
import Content_Heading_Name_std from '../Std_Common/Content_Heading_Name_std';
import Content_Footer_std from '../Std_Common/Content_Footer_std';
import Content_Today_std from './Content_Today_std';
import Content_Delay_std from './Content_Delay_std';
import Content_weak_std from './Content_weak_std';
import Content_result_std from './Content_result_std';
import Content_info_std from './Content_info_std';


function Content_std() {
  
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

                {/* 학생 알림 부분 */}
                <Content_info_std></Content_info_std>
                {/* <!-- Content Row --> */}
                <div class="row">

                    {/* 학습 결과 */}
                    <Content_result_std></Content_result_std>

                    {/* 약점 뽀개기 */}
                    <Content_weak_std></Content_weak_std>
                </div>

                {/* <!-- Content Row --> */}
                <div class="row">
                    {/* 학생 Delay */}
                    <Content_Delay_std></Content_Delay_std>

                    {/* 학생 Today */}
                    <Content_Today_std></Content_Today_std>
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
export default Content_std;