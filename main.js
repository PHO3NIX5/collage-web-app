var speech_rec =window.webkitSpeechRecognition;
    var recognition=new speech_rec();
    
function selfie(){
    document.getElementById("output").innerHTML="";
    
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    contents=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=contents;
    
    if(contents=="selfie"){
        openCam();
        speak();
        setTimeout(
          picture  
         , 5000);
            speak()
         setTimeout(
            picture 
           , 5000);
            speak()
            setTimeout(
                picture 
               , 5000);
                speak()
    }
    
}
function picture(){
    snap();
    save();
}
function speak(){
    var synth=window.speechSynthesis;
    var speakData="Ok taking your selfie in 5 seconds";
    var speakOBJ=new SpeechSynthesisUtterance(speakData);
    synth.speak(speakOBJ);
}
function openCam(){
    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
     });
     Webcam.attach( '#webcam' );
}
function snap(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('output').innerHTML = 
         '<img id="img1" src="'+data_uri+'"/><img id="img1" src="'+data_uri+'"/><img id="img1" src="'+data_uri+'"/>';
    } );
}
function save(){
    link=document.getElementById("myLink1");
    img1=document.getElementById("img1").src;
    link.href=img1;
    link.click();
    link=document.getElementById("myLink2");
    img2=document.getElementById("img2").src;
    link.href=img2;
    link.click();
    link=document.getElementById("myLink3");
    img2=document.getElementById("img3").src;
    link.href=img3;
    link.click();
}
