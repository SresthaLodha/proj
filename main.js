Webcam.set({
    width: 320,
    height:240,
    image_format: 'jpeg',
    jpeg_quality: 90


});
Webcam.attach("#webcam");
function take(){
    Webcam.snap(function(data_uri){
        document.getElementById("image1").innerHTML="<img  id='image2' src='"+data_uri+"'>"
    })
    
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lOkBAwMnj/model.json",modelready)
function modelready(){
    console.log("model is succesfuly loaded");}





   
