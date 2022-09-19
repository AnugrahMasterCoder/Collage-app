var content;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);
if(content =="take my selfie")
{
console.log("taking selfie ---");
speak();
}
}
function speak() {

    var synth = window.speechSynthesis;
speak_data = "taking your selfie"
var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "taking your selfie in 4 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 4000);

setTimeout(function()
{
    img_id = "selfie2";
    take_snapshot();
    speak_data = "taking your selfie in 8 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 8000);

setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();
    speak_data = "taking your selfie in 10 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 10000);

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function(data_uri)
{
    if(img_id == "selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
    }
    if(img_id == "selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
    }
    if(img_id == "selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
    }
}
)};

}