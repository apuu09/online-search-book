import React from "react";
const Model = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3> {item.volumeInfo.author}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span> {item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button>more</button>
              </a>
            </div>
          </div>
          <h4 className="Description">{item.volumeInfo.Description}</h4>
        </div>
      </div>
    </>
  );
};
export default Model;
