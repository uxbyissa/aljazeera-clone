//import React from 'react'
import React, { useState } from 'react';
import NewsCard from '../components/news/NewsCard';
import { mainNews, sideNews } from '../data/newsData';



function HomePage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mt-5">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <a
          className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
          id="live-stream-tab"
          data-bs-toggle="tab"
          href="#live-stream"
          role="tab"
          onClick={() => setActiveTab(1)}
        >
          البث الحي
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
          id="live-channel-tab"
          data-bs-toggle="tab"
          href="#live-channel"
          role="tab"
          onClick={() => setActiveTab(2)}
        >
          قناة مباشر
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
          id="documentary-tab"
          data-bs-toggle="tab"
          href="#documentary"
          role="tab"
          onClick={() => setActiveTab(3)}
        >
          الوثائقية
        </a>
      </li>
    </ul>
    <div className="tab-content mt-3">
      <div
        className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}
        id="live-stream"
        role="tabpanel"
      >
         <div
          className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}
          id="live-stream"
          role="tabpanel"
        >
          {/* محتوى الفيديو */}
          <h4>البث الحي</h4>
          <div className="mb-3">
          <iframe width="100%" height="562" src="https://www.youtube.com/embed/Iya0hWL4TNo" title="بأقلام المحررين - هكذا تخلص حافظ الأسد من خصومه" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>

          {/* النص التحذيري */}
          <div className="d-flex justify-content-between align-items-center">
            <p className="alert alert-warning mb-0">
              قد يحتوي هذا الفيديو أنماطا ضوئية أو صورا يمكن أن تسبب نوبات صرع أو عدم ارتياح لمن يعاني حساسيات بصرية.
            </p>
            <button className="btn btn-primary d-flex align-items-center">
            <i class="fa fa-headphones" aria-hidden="true" style={{padding:"10px"}}></i>
            استماع
            </button>
         </div>
         <hr/>
          
          

    
        </div>
        <h5 className="mt-4">تقارير إخبارية</h5>

          <div className="row">
          {sideNews.map(news => (
          <div className="col-md-3 col-sm-6 col-12" key={news.id}>
            <NewsCard
              title={news.title}
              image={news.image}
              updates={[]}  // بيانات التحديثات فارغة لهذا المثال
            />
       
        
          </div>
          
          ))}
          
          </div>
      </div>
      <div
        className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}
        id="live-channel"
        role="tabpanel"
      >
        {/* محتوى التاب الثاني */}
        <h4>محتوى قناة مباشر</h4>
        <p>هنا سيتم عرض قناة مباشرة مع معلومات تفصيلية عنها.</p>
      </div>
      <div
        className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}
        id="documentary"
        role="tabpanel"
      >
        {/* محتوى التاب الثالث */}
        <h4>محتوى الوثائقية</h4>
        <p>هنا سيتم عرض برامج وثائقية أو تقارير خاصة حول مواضيع مختلفة.</p>
      </div>
    </div>
  </div>

  );
}

export default HomePage;
