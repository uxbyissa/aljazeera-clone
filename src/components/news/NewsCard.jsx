const NewsCard = ({ title, image, updates }) => {
    return (
        
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {updates && updates.length > 0 && (
            <ul className="list-group list-group-flush">
              {updates.map((update, index) => (
                <li key={index} className="list-group-item">
                  <strong>{update.time}</strong>: {update.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
export default NewsCard;
