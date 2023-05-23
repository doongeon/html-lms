import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import HomePage_std from './Std_Page/HomePage_std'
import LecturePage_std from './Std_Page/LecturePage_std';
import VideoPage_std from './Std_Page/VideoPage_std';
import ClassPage_t from './T_Page/ClassPage_t';
import HomePage_t from './T_Page/HomePage_t';
import ClassPlusPage_t from './T_Page/ClassPlusPage_t';
import StudentPlusPage_t from './T_Page/StudentPlusPage_t';
import StudentPage_t from './T_Page/StudentPage_t';
import LoginPage from './Login_page/LoginPage';
import WordPage_t from './T_Page/WordPage_t';
import LecturePage_t from './T_Page/LecturePage_t';
import LecturePlusPage_t from './T_Page/LecturePlusPage_t';
import StartPage from './Login_page/StartPage';
import Login from './Login_page/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/LoginP" element={<Login />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Student" element={<HomePage_std />} />
        <Route path="/Student/Lecture" element={<LecturePage_std />} />
        <Route path="/Student/Lecture/Video" element={<VideoPage_std />} />
        <Route path="/Teacher" element={<HomePage_t />} />
        <Route path="/Teacher/ClassList" element={<ClassPage_t />} />
        <Route path="/Teacher/ClassPlus" element={<ClassPlusPage_t />} />
        <Route path="/Teacher/StudentList" element={<StudentPage_t />} />
        <Route path="/Teacher/StudentPlus" element={<StudentPlusPage_t />} />
        <Route path="/Teacher/WordList" element={<WordPage_t />} />
        <Route path="/Teacher/Lecture" element={<LecturePage_t />} />
        <Route path="/Teacher/LecturePlus" element={<LecturePlusPage_t/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
