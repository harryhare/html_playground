// simple camer
var constraints = {
    video: true
};
// screen
// var constraints = {
//     video: {
//         mandatory: {
//             chromeMediaSource: 'screen'
//         }
//     }
// };


function successCallback(stream) {
    var video = document.querySelector("video");
    //window.URL.createObjectURL deprecate
    //video.src=window.URL.createObjectURL(stream);
    video.srcObject = stream;
}

function errorCallback(error) {
    console.log("navigator.getUserMedia error:", error);
}


navigator.getUserMedia(constraints, successCallback, errorCallback);



// Success callback when requesting audio input stream
// function gotStream(stream) {
//     var audioContext = new webkitAudioContext();

//     // Create an AudioNode from the stream
//     var mediaStreamSource = audioContext.createMediaStreamSource(stream);

//     // Connect it to the destination or any other node for processing!
//     mediaStreamSource.connect(audioContext.destination);
// }

// function errorCallback2(error) {
//     console.log(error);
// }

// navigator.webkitGetUserMedia({
//     audio: true
// }, gotStream, errorCallback2);