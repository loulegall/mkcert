var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");

// cration du webworker
var worker = new Worker("worker.js");

worker.onmessage = function(e) {
    console.log(e.data);
};

worker.postMessage('start');