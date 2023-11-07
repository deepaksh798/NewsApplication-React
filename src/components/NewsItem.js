import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={!imageUrl ? "https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?w=826&t=st=1697452263~exp=1697452863~hmac=0522b31634ad608790478425624af5bac6a76939678865a84faeaee9d4452645" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
