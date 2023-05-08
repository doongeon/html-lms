import React from 'react';
import { Link } from 'react-router-dom';

import Std_side from '../nav/Std_side'
import Top_bar from '../nav/Top_bar';
import Card_message from '../cards/Card_message';
import Card from '../cards/Card';

function App() {
  return (
    <div className="App">

      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Std_side></Std_side>
        {/* <!-- Content Wrapper --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            {/* <!-- Topbar --> */}
            <Top_bar></Top_bar>


            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

              {/* <!-- 페이지 제목 --> */}
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Hello! Gwanyeong</h1>
                  <Link to='/Example'>Example로 이동합니다.</Link>
              </div>

              {/* 첫번째 행 */}
              <div class="row">

                {/* 카드크기 */}
                <div class="col-xl- col-md-6 mb-4">
                  {/* 카드 내용 */}
                    {Card('hello')}

                </div>


                {/* 카드크기 */}
                <div class="col-xl-6 col-md-6 mb-4">
                  {/* 카드 내용 */}
                  {Card('helloasdfsdf')}

                </div>



              </div>


              {/* 두번째 행 */}
              <div class="row">
                {/* 카드크기 */}
                <div class="col-xl-12 col-md-12 mb-4">
                  {/* 카드 내용 */}
                  <Card_message></Card_message>
                </div>
                

              </div>


              {/* 세번째 행 */}
              <div class="row">

              </div>

            </div>


          </div>
          {/* <!-- End of Main Content --> */}



          {/* <!-- Footer --> */}
          <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                  <div class="copyright text-center my-auto">
                      <span>Copyright &copy; Your Website 2021</span>
                  </div>
              </div>
          </footer>

        </div>
        {/* <!-- End of Content Wrapper --> */}

      </div>
      {/* <!-- End of Page Wrapper --> */}






      {/* <!-- Scroll to Top Button--> */}
      <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
      </a>

      



      {/* 상단 툴바 회원사진 클릭시 로그 아웃 모델 */}
      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div class="modal-footer">
                      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                      <a class="btn btn-primary" href="login.html">Logout</a>
                  </div>
              </div>
          </div>
      </div>  


    </div>

    

  );
}

export default App;
