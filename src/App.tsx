import React, { useRef } from 'react';
// import logo from './logo.svg';
// import './App.css';

// @ts-ignore
const { desktopCapturer } = window["electron"];

function App() {
  const videoRef = useRef<any>('video');

  const share = async () => {
    console.log("desktopCapturer: ", desktopCapturer);
    const sources = await desktopCapturer.getSources({ types: ['screen'] });

    console.log("source: ", sources);

    (navigator as any).webkitGetUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sources[0].id,
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720
        }
      }
    }, (stream: any) => {
      console.log('stream:', stream);
      console.log('videoRef.current:', videoRef.current);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }, (err: any) => {
      console.log("capture err: ", err);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={share}>Share</h1>

        <video autoPlay={true} ref={videoRef}></video>
      </header>
    </div>
  );
}

export default App;
