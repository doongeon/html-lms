import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar_t from '../T_Common/Content_TopBar_t';
import Content_Footer_t from '../T_Common/Content_Footer_t';
import StudentPlus_Table_t from './StudentPlus_Table_t';

function StudentPlus_t() {

  return (
    <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <Content_TopBar_t></Content_TopBar_t>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 class="h3 mb-2 text-gray-800">Student 추가</h1>
                    <p class="mb-4">
                        </p>

                    {/* <!-- 학생 추가 --> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Student List</h6>
                        </div>
                        {/* 강의 추가 테이블 부분 */}
                        <StudentPlus_Table_t></StudentPlus_Table_t>
                    </div>

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
export default StudentPlus_t;