import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>Миті нашого інституту</h1>
      <div className="gallery-wrap">
        <div className="item" style={{ backgroundImage: "url('/images/gallery/image1.jpg')" }}></div>
        <div className="item" style={{ backgroundImage: "url('/images/gallery/image2.jpg')" }}></div>
        <div className="item" style={{ backgroundImage: "url('/images/gallery/image3.jpg')" }}></div>
        <div className="item" style={{ backgroundImage: "url('/images/gallery/image4.jpg')" }}></div>
        <div className="item" style={{ backgroundImage: "url('/images/gallery/image5.jpg')" }}></div>
      </div>
    </div>
  );
};

export default GalleryPage;
