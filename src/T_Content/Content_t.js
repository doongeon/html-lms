import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Content_Heading_Name_t from '../T_Common/Content_Heading_Name_t';
import Content_TopBar_t from '../T_Common/Content_TopBar_t';
import Content_Footer_t from '../T_Common/Content_Footer_t';
import Content_Info_t from './Content_Info_t';
import Content_Homework_t from './Content_Homework_t';
import Content_Attend_t from './Content_Attend_t';
import Content_Pay_t from './Content_Pay_t';
import Content_Non_Pay_t from './Content_Non_Pay_t';

function Content_t() {

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
                    <Content_Heading_Name_t></Content_Heading_Name_t>

                    <div class="row">
                        {/* <!-- 알림 관리 --> */}
                        <Content_Info_t></Content_Info_t>

                    </div>
                    {/* <!-- Content Row --> */}
                    

                    {/* <!-- Content Row --> */}
                    <div class="row">

                        {/* <!-- 과제 관리 --> */}
                        <Content_Homework_t></Content_Homework_t>

                        <Content_Attend_t></Content_Attend_t>

                    </div>
           
                    <div class="row">
                        {/* <!-- 수업료 --> */}
                        <Content_Pay_t></Content_Pay_t>

                        <Content_Non_Pay_t></Content_Non_Pay_t>
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
export default Content_t;