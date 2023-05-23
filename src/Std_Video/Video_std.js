import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar_std from '../Std_Common/Content_TopBar_std';
import Content_Heading_Name_std from '../Std_Common/Content_Heading_Name_std';
import Content_Footer_std from '../Std_Common/Content_Footer_std';
import Video_Watching_std from './Video_Watching_std';

function Video_std() {
  
  return (
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* TopBar */}
            <Content_TopBar_std></Content_TopBar_std>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

                {/* 헤딩 이름 부분 */}
                <Content_Heading_Name_std></Content_Heading_Name_std>

                {/* <!-- Content Row --> */}
                <div class="row">
                    
                    {/* 비디오 시청 부분 */}
                    <Video_Watching_std></Video_Watching_std>
                    
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
export default Video_std;