import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar_t from '../T_Common/Content_TopBar_t';
import Content_Footer_t from '../T_Common/Content_Footer_t';
import Lecture_Table_t from './Lecture_Table_t';

function Lecture_t() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* TopBar */}
            <Content_TopBar_t></Content_TopBar_t>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

                {/* 헤딩 이름 부분 */}
                <h1 class="h3 mb-2 text-gray-800">강의 관리</h1>
                 <p class="mb-4">
                 </p>

                {/* 강의 목록 */}
                <Lecture_Table_t></Lecture_Table_t>

            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <Content_Footer_t></Content_Footer_t>
        {/* <!-- End of Footer --> */}

    </div>
  )
}
export default Lecture_t;