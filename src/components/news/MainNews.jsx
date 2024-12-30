import React from 'react';

const MainNews = ({ news }) => {
  return (
    <div className="card mb-4">
      <img src={news.image} className="card-img-top" alt={news.title} />
      <div className="card-body">
        <h2 className="card-title fw-bold text-end">{news.title}</h2>
        <div className="mt-3">
          {news.updates.map((update, index) => (
            <div key={index} className="d-flex justify-content-end gap-2 mb-2">
              <span className="text-muted">{update.text}</span>
              <span className="text-primary">{update.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

