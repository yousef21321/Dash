// import React, { useState, useRef } from 'react';
// import axios from 'axios';
//
// const App = () => {
//   const [transcription, setTranscription] = useState('');
//   const audioRef = useRef(null);
//
//   const handleStartRecording = () => {
//     const constraints = { audio: true };
//     navigator.mediaDevices.getUserMedia(constraints)
//       .then(stream => {
//         audioRef.current.srcObject = stream;
//       })
//       .catch(error => console.error('Error accessing microphone:', error));
//   };
//
//   const handleStopRecording = () => {
//     audioRef.current.srcObject.getTracks().forEach(track => track.stop());
//     const formData = new FormData();
//     audioRef.current.captureStream().getAudioTracks().forEach(track => formData.append('audio', track));
//     axios.post('http://localhost:5000/transcribe', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
//       .then(response => {
//         setTranscription(response.data.recognized_text);
//       })
//       .catch(error => console.error('Error transcribing audio:', error));
//   };
//
//   return (
//     <div>
//       <button onClick={handleStartRecording}>Start Recording</button>
//       <button onClick={handleStopRecording}>Stop Recording</button>
//       <audio ref={audioRef} controls />
//       <div>Transcription: {transcription}</div>
//     </div>
//   );
// };
//
// export default App;
// src/App.js
import React from 'react';
import BabyList from './components/BabyList';
import HeartRateList from './components/DailyReport';
import AssociationRuleList from './components/AssociationRuleList';
import CryPrediction from './components/CryAudio';
import ImageUploader from './components/ImageUploaderDisease';
import ImageUploaderDisease from './components/ImageUploaderDisease';
import './App.css';

function App() {
  return (
      <div className="App">
          <BabyList/>
          <h1>................................................................................................................................................................................................................</h1>

          <HeartRateList/>
          <br/>
          <h1>................................................................................................................................................................................................................</h1>
          <h1>Cry Prediction App</h1>
          <CryPrediction/>
          <h1>................................................................................................................................................................................................................</h1>

          <br/>
          <h1>Cry Prediction Image</h1>
          <ImageUploader/>
          <h1>................................................................................................................................................................................................................</h1>

          <br/>
          <h1>Cry Diseas الصفرااا</h1>
          <ImageUploaderDisease/>
          <h1>................................................................................................................................................................................................................</h1>

          <h1>AssociationRuleList</h1>

          <AssociationRuleList/>

      </div>
  );
}

export default App;
