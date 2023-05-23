<<<<<<< HEAD
import Content_SideBar_std from '../Std_Common/Content_SideBar_std';
import Lecture_std from '../Std_Lecture/Lecture_std';

function LecturePage_std() {
  return (
    <body id="page-top">
      <div id="wrapper">
        <Content_SideBar_std></Content_SideBar_std>
        <Lecture_std></Lecture_std>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

      {/* <!-- Logout Modal--> */}
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
          </div>Tables
      </div>
    </body>
  );
}

export default LecturePage_std;
=======
import Content_SideBar_std from '../Std_Common/Content_SideBar_std';
import Lecture_std from '../Std_Lecture/Lecture_std';

function LecturePage_std() {
  return (
    <body id="page-top">
      <div id="wrapper">
        <Content_SideBar_std></Content_SideBar_std>
        <Lecture_std></Lecture_std>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

      {/* <!-- Logout Modal--> */}
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
          </div>Tables
      </div>
    </body>
  );
}

export default LecturePage_std;
>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
