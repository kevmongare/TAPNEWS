function getSubmittedVideo(){
    let Videoupload = document.getElementById("Videoupload");
    let file = Videoupload.files[0];

    let videoURL = URL.createObjectURL(file);
    let VideoPreview =document.getElementById("VideoPreview");

    VideoPreview.src =videoURL;
}
document.getElementById("submitVideo").addEventListener("click",getSubmittedVideo);