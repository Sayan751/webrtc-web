import './main.css';
import 'webrtc-adapter';

// this is where to stream the video.
const videoEl = document.querySelector('video')!;

// let localMediaStream: MediaProvider
function getLocalMediaStream(mediaStream: MediaProvider) {
  videoEl.srcObject = (globalThis as Window & typeof globalThis & {localMediaStream: MediaProvider}).localMediaStream = mediaStream;
}

function handleLocalMediaStreamError(error: Error) {
  console.log('navigator.getUserMedia error: ', error);
}

const constraints: MediaStreamConstraints = {
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  } /* true */,
  // audio: true,
};
navigator
  .mediaDevices
  .getUserMedia(constraints)
  .then(getLocalMediaStream)
  .catch(handleLocalMediaStreamError);

