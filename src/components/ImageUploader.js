// src/components/CryAudio.js

import React, { useState } from 'react';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/MLcry', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setPredictedLabel(data.predicted_label);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {predictedLabel && <p>Predicted Label: {predictedLabel}</p>}
    </div>
  );
};

export default ImageUploader;
