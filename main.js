var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "selfie") {
        console.log("uploading photos --- ");
        speak();
    }
};

function speak() {
    var synth = window.speechSynthesis;

    Webcam.attach(camera);

    setTimeout(function () {
        img_id = "selfie1";
        var speak_data = "Taking selfie in 5 seconds";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);
        takeSnapShot();
    }, 5000);
    setTimeout(function () {
        img_id = "selfie2";
        var speak_data = "Taking selfie in 5 seconds";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);
        takeSnapShot();
    }, 10000);
    setTimeout(function () {
        img_id = "selfie3";
        var speak_data = "Taking selfie in 5 seconds";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);
        takeSnapShot();
    }, 15000);
    setTimeout(function () {
        img_id = "selfie4";
        var speak_data = "Taking selfie in 5 seconds";
        var utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);
        takeSnapShot();
    }, 20000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

function takeSnapShot() {
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id='result1' src=" + data_uri + ">";
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id='result2' src=" + data_uri + ">";
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src=" + data_uri + ">";
        }
        if (img_id == "selfie4") {
            document.getElementById("result4").innerHTML = "<img id='selfie4' src=" + data_uri + ">";
        }
    })
}