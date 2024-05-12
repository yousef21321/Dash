import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/ML', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPredictedLabel(response.data.predicted_label);
    } catch (error) {
      console.error('Error predicting:', error);
      alert('Error predicting, please try again');
    }
  };

  return (
    <div className="App">
      <h1>Image Classifier</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Predict</button>
      {predictedLabel && <p>Predicted Label: {predictedLabel}</p>}
    </div>
  );
}

export default App;
