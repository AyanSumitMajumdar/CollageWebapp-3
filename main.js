var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function start(){
  document.getElementById("textbox").innerHTML="";
  recognition.start();
}

function speak(){
    var synth=window.speechSynthesis;
  Webcam.attach(camera);
  setTimeout(function(){
    img_id="selfie_1";
   take_snapshot();
   speak_data="taking your selfie in 5 sec"
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis); 
  },5000);
  }

  setTimeout(function(){
    img_id="selfie_2";
   take_snapshot();
   speak_data="taking your selfie in 5 sec"
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis); 
  },5000);

  setTimeout(function(){
    img_id="selfie_2";
   take_snapshot();
   speak_data="taking your selfie in 5 sec"
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis); 
  },5000);

  function take_snapshot()
  {
     console.log(img_id);

Webcam.snap(function(data_uri){ 
if(img_id=="selfie_3"){
    document.getElementById("result 3").innerHTML='<img id="selfie_3" src="'+data_uri+'"/>';
}

if(img_id=="selfie_2"){
  document.getElementById("result 2").innerHTML='<img id="selfie_2" src="'+data_uri+'"/>';
}

if(img_id=="selfie_3"){
  document.getElementById("result 3").innerHTML='<img id="selfie_3" src="'+data_uri+'"/>';
}
});
  }