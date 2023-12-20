import React, { useState } from 'react';
import ImagePreview from './ImagePreview';

const DragAndDropImage = () => {
  const [imageSrc, setImageSrc] = useState('');

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const dropHandler = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setImageSrc('');
  };

  return (
    <div className="drop-area" onDragOver={dragOverHandler} onDrop={dropHandler}>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileSelect}
      />
      <label htmlFor="file-input">
        <ImagePreview imageSrc={imageSrc} onCancel={handleCancel} />
      </label>
    </div>
  );
};

export default DragAndDropImage;
