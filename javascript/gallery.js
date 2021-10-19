var modal = document.getElementById('modal-image');
var modalImages = document.getElementById('modal-image-1');
var caption = document.getElementById('caption');

var images_1 = document.getElementById('galleryEx-1');
var images_2 = document.getElementById('galleryEx-2');    
var images_3 = document.getElementById('galleryEx-3');
var images_4 = document.getElementById('galleryEx-4');
var images_5 = document.getElementById('galleryEx-5');
var images_6 = document.getElementById('galleryEx-6');
var images_7 = document.getElementById('galleryEx-7');
var images_8 = document.getElementById('galleryEx-8');
var images_9 = document.getElementById('galleryEx-9');
images_1.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on January 9, 2017 in West Jakarta.";
}
images_2.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on June 1, 2017 in South Jakarta.";
}
images_3.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on November 27, 2018 in North Jakarta.";
}
images_4.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on March 18, 2019 in West Jakarta.";
}
images_5.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on October 10, 2019 in West Jakarta.";
}
images_6.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on December 11, 2019 in Central Jakarta.";
}
images_7.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on July 17, 2020 in West Jakarta.";
}
images_8.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on August 20, 2020 in South Jakarta.";
}
images_9.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    caption.innerHTML = "Exhibition on December 24, 2020 in South Jakarta.";
}

var modal = document.getElementById('modal-image');
var span = document.getElementById("close");

span.onclick = function(){
    modal.style.display = "none";
}