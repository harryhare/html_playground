var startButton = document.getElementById('startButton');
var callButton = document.getElementById('callButton');
var hangupButton = document.getElementById('hangupButton');
callButton.disabled = true;
hangupButton.disabled = true;

startButton.addEventListener('click', startAction);
callButton.addEventListener('click', callAction);
hangupButton.addEventListener('click', hangupAction);

var localVideo = document.getElementById('local_video');
var remoteVideo = document.getElementById('remote_video');
var localStream;
var pc1;
var pc2;

const offerOptions = {
    offerToReceiveVideo: 1,
    offerToReceiveAudio: 1
};

function startAction() {
    //采集摄像头视频
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        .then(function(mediaStream) {
            localStream = mediaStream;
            localVideo.srcObject = mediaStream;
            startButton.disabled = true;
            callButton.disabled = false;
        }).catch(function(error) {
            console.log(JSON.stringify(error));
        });
}

function callAction() {

    hangupButton.disabled = false;
    callButton.disabled = true;

    pc1 = new RTCPeerConnection();
    pc1.addEventListener('icecandidate', function(event) {
        console.log("p1 ice candidate:", event);
        var iceCandidate = event.candidate;
        if (iceCandidate) {
            // 实际通信中，这里应为pc1 把iceCandidate发送给中间服务器，中间服务器（通过websocket？）把p1 candidate的信息告诉p2
            pc2.addIceCandidate(iceCandidate);
        }
    });
    localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));

    pc2 = new RTCPeerConnection();
    pc2.addEventListener('addstream', function(event) {
        console.log("p2 add stream", event)
        remoteVideo.srcObject = event.stream;
    });

    pc1.createOffer(offerOptions).then(function(offer) {
        console.log("p1 createOffer", offer);
        pc1.setLocalDescription(offer);
        // 实际通信中， p1 应该把offer 通过中介服务器发给p2
        pc2.setRemoteDescription(offer);

        pc2.createAnswer().then(function(description) {

            console.log("p2 createAnswer", description);
            pc2.setLocalDescription(description);
            // 实际通信中， p2 应该把 answer 通过中介服务器发给p1
            pc1.setRemoteDescription(description);
        });
    });
}

function hangupAction() {
    localStream.getTracks().forEach(track => track.stop());
    pc1.close();
    pc2.close();
    pc1 = null;
    pc2 = null;
    hangupButton.disabled = true;
    callButton.disabled = true;
    startButton.disabled = false;
}