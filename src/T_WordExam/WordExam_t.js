<<<<<<< HEAD
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar_t from '../T_Common/Content_TopBar_t';
import Content_Footer_t from '../T_Common/Content_Footer_t';

function WordExam_t() {
  
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
                <h1 class="h3 mb-2 text-gray-800">단어 관리</h1>
                <p class="mb-4"></p>

                {/* <!-- 단어 list --> */}
                

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
=======
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_TopBar_t from '../T_Common/Content_TopBar_t';
import Content_Footer_t from '../T_Common/Content_Footer_t';

function WordExam_t() {
  
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
                <h1 class="h3 mb-2 text-gray-800">단어 관리</h1>
                <p class="mb-4"></p>

                {/* <!-- 단어 list --> */}
                

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
>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
export default WordExam_t;