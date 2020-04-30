import React, { useRef } from 'react';
import { render } from 'react-dom';
// import './index.css';
import Home from './component';
// import * as serviceWorker from './serviceWorker';

// @ts-ignore
const { desktopCapturer } = window["electron"];

function App() {
  const videoRef = useRef<any>('video');
  const videoRef2 = useRef<any>('video');

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
        videoRef2.current.srcObject = stream.clone();
      }
    }, (err: any) => {
      console.log("capture err: ", err);
    });
  }

  const stop = () => {
    if (videoRef.current) {
      videoRef.current.srcObject.getTracks().forEach((track: MediaStreamTrack) => {
        console.log("track: ", track);

        track.stop();
      })
      videoRef.current.srcObject = null;
    }

    if (videoRef2.current) {
      videoRef2.current.srcObject.getTracks().forEach((track: MediaStreamTrack) => {
        console.log("track: ", track);

        track.stop();
      })
      videoRef2.current.srcObject = null;
    }    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={share}>Share</h1>
        <h1 onClick={stop}>Stop</h1>

        <video style={{ width: '100px', height: '100px' }} autoPlay={true} ref={videoRef}></video>
        <video style={{ width: '100px', height: '100px' }} autoPlay={true} ref={videoRef2}></video>
      </header>
    </div>
  );
}

render(
  <div>
    {/* <App /> */}
    <Home />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
