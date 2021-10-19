var modal = document.getElementById('modal-image');
var modalImages = document.getElementById('modal-image-1');

var caption = document.getElementById('caption');
var price = document.getElementById('price');
var paragraph = document.getElementById('paragraph');

var images_1 = document.getElementById('productK-1');
var images_2 = document.getElementById('productK-2');
var images_3 = document.getElementById('productK-3');
var images_4 = document.getElementById('productK-4');
var images_5 = document.getElementById('productK-5');
var images_6 = document.getElementById('productK-6');


images_1.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption.innerHTML = this.alt;
    price.innerHTML = "Price : MSRP Rp 317.000.000 (JAKARTA)";
    paragraph.innerHTML = "The new Ninja ZX-6R offers a powerful 636cc engine, advanced electronics and a lightweight chassis. The '636' has been optimized for roads and tracks, offering an enjoyable experience in a variety of driving situations.";
}

images_2.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption.innerHTML = this.alt;
    price.innerHTML = "Price : MSRP Rp 98.850.000 (JAKARTA)";
    paragraph.innerHTML = "Featuring the legendary performance engine of the Kawasako Ninja ZX Series, the long-awaited 250cc Supersport class motorcycle has finally arrived and become a reality. Its 249.8 cc In-Line Four precision engine delivers high-rpm power, the highest in its class. Equipped with a number of chassis components and electronic rider support features that rival the flagship Ninja ZX model, making the Ninja ZX-25R able to provide unmatched performance in every driving condition.";
}

images_3.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption.innerHTML = this.alt;
    price.innerHTML = "Price : MSRP Rp 492.000.000 (Jakarta)";
    paragraph.innerHTML = "Derived from the proven foundation of the FIM WorldSBK Championship, the Kawasako Ninja ZX-10R motorcycle is a direct result of decades of world-class road racing innovation. The 998cc engine with superb handling and aggressive styling complements the sophisticated electronics.";
}

images_4.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption.innerHTML = this.alt;
    price.innerHTML = "Price : MSRP Rp 760.000.000 (JAKARTA)";
    paragraph.innerHTML = "The Ninja H2 features power from Kawasako's astonishing supercharged hypersport engine. Equipped with a supercharged 998cc In-Line Four engine, state-of-the-art electronics and the latest Brembo brakes, the Ninja H2 delivers the best on the road.";
}

images_5.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption.innerHTML = this.alt;
    price.innerHTML = "Price : MSRP Rp 64.200.000 (JAKARTA)";
    paragraph.innerHTML = "Kawasako is proud to introduce a sport model in a very competitive arena, namely the 250 cc sport class. Crafted in the sharp new Ninja style, the new Ninja 250 delivers greater performance than its predecessor with a new, more powerful engine, as well as a lighter weight.";
}

images_6.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption.innerHTML = this.alt;
    price.innerHTML = "Price : MSRP Rp 40.600.000 (JAKARTA)";
    paragraph.innerHTML = "Kawasako is proud to introduce a sport model in a highly competitive arena, namely the 250cc sport class. Crafted in the sharp new Ninja style, the new Ninja 250SL delivers greater performance than its predecessor with a new, more powerful engine, as well as a lighter weight.";
}


var modal = document.getElementById('modal-image');
var span = document.getElementById("close");

span.onclick = function(){
    modal.style.display = "none";
}
