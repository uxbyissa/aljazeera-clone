import React from 'react';



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="./logo.png" alt="Al Jazeera" height="40" />
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/news">أخبار</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">افريقيا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">ابعاد</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">رياضة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">مقالات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">سفر</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">اقتصاد</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">ثقافة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">فيديو</a>
            </li>
            {/* Add more nav items */}
          </ul>
          
          <div className="d-flex">
            <button className="btn btn-outline-primary ms-2">
            <i class="fa fa-play" aria-hidden="true"></i>

            البث الحي
            </button>
            <i class="fa fa-search" aria-hidden="true" style={{}}></i>

            <button className="btn btn-primary">تسجيل</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
