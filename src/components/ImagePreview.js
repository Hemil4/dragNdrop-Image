import React from 'react';

const ImagePreview = ({ imageSrc, onCancel }) => {
  return (
    <div className="image-container">
      {imageSrc ? (
        <>
          <img src={imageSrc} alt="Preview" className="preview-image" />
          <button className="cancel-button" onClick={onCancel}>
            &#x2715;
          </button>
        </>
      ) : (
        'Drag and drop an image here or click to select'
      )}
    </div>
  );
};

export default ImagePreview;
