var speech_rec = window.webkitSpeechRecognition;
var recognition = new speech_rec();

function save1() {
    link1 = document.getElementById("myLink1");
    img1 = document.getElementById("img1").src;
    link1.href = img1;
    link1.click();

}
function save2() {
    link2 = document.getElementById("myLink2");
    img2 = document.getElementById("img2").src;
    link2.href = img2;
    link2.click();
}
function save3() {
    link3 = document.getElementById("myLink3");
    img3 = document.getElementById("img3").src;
    link3.href = img3;
    link3.click();
}
function save(){
    save1()
    save2()
    save3()
}
function start() {
    document.getElementById("textbox").innerHTML = "";

    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    contents = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = contents;

    if (contents == "selfie") {
        openCam();
        synth = window.speechSynthesis;
        speakData = "Ok taking your selfie in 5 seconds";
        speakOBJ = new SpeechSynthesisUtterance(speakData);
        synth.speak(speakOBJ);
        setTimeout(function () {

            Webcam.snap(function (data_uri) {
                // display results in page
                document.getElementById('result1').innerHTML =
                    '<img id="img1" src="' + data_uri + '"/>';
            });
            synth = window.speechSynthesis;
            speakData = "Ok taking your selfie in 5 more seconds";
            speakOBJ = new SpeechSynthesisUtterance(speakData);
            synth.speak(speakOBJ);

        }, 5000);
        setTimeout(function () {
            
            Webcam.snap(function (data_uri) {
                // display results in page
                document.getElementById('result2').innerHTML =
                    '<img id="img2" src="' + data_uri + '"/>';
            });
            synth = window.speechSynthesis;
            speakData = "Ok taking your selfie in 5 more seconds";
            speakOBJ = new SpeechSynthesisUtterance(speakData);
            synth.speak(speakOBJ);

        }, 10000);
        setTimeout(function () {
            
            Webcam.snap(function (data_uri) {
                // display results in page
                document.getElementById('result3').innerHTML =
                    '<img id="img3" src="' + data_uri + '"/>';
            });

        }, 15000);

        setTimeout(function () {
            save()
        }, 20000)

    }

}

function speak() {
    synth = window.speechSynthesis;
    speakData = "Ok taking your selfie in 5 seconds";
    speakOBJ = new SpeechSynthesisUtterance(speakData);
    synth.speak(speakOBJ);
}
function openCam() {
    Webcam.set({
        width: 700,
        height: 600,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach('#camera');
}
function snap() {
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('result1').innerHTML =
            '<img id="img1" src="' + data_uri + '"/>';
    });
}


