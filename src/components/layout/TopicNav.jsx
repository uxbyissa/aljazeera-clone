import React from 'react';

const TopicNav = () => {
  const topics = ['سوريا', 'فلسطين', 'لبنان', 'السودان', 'أوكرانيا'];
  
  return (
    <div className="bg-light py-2">
      <div className="container">
        <div className="d-flex gap-3 justify-content-center align-items-center" >
          <span className="fw-bold">الآن:</span>
          {topics.map(topic => (
            <a key={topic} href={`/topic/${topic}`} className="text-decoration-none">
              {topic}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicNav;
