//https://teachablemachine.withgoogle.com/models/Gp5GaETAm/model.json

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Gp5GaETAm/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}

function gotresults(error, results){
    console.log(error);
}