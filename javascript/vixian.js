var modal = document.getElementById('modal-image');
var modalImages = document.getElementById('modal-image-1');

var caption2 = document.getElementById('caption2');
var price2 = document.getElementById('price2');
var paragraph2 = document.getElementById('paragraph2');

var images_1 = document.getElementById('productV-1');
var images_2 = document.getElementById('productV-2');
var images_3 = document.getElementById('productV-3');


images_1.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption2.innerHTML = this.alt;
    price2.innerHTML = "Price : MSRP Rp Rp 31.630.000 (JAKARTA)";
    paragraph2.innerHTML = "The Vixion R is powered by a 155.1 cc Liquid Cooled 1 Cylinder engine that produces 19 hp at 10000 rpm and 14.7 Nm of torque at 8500 rpm. The Vixion R has a seat height of 795 mm. The front tire size is (front-tyre-size} while the rear is 130/70 R17.";
}

images_2.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption2.innerHTML = this.alt;
    price2.innerHTML = "Price : MSRP Rp 28.650.000 (JAKARTA)";
    paragraph2.innerHTML = "With this engine the Yamaha All New Vixion Monster Energy is capable of producing a maximum power of 12.2 kW with an engine speed of 8500 rpm. Meanwhile, the torque produced is quite large, which is around 14.5 Nm at 7500 rpm engine speed.";
}

images_3.onclick = function(){
    modal.style.display = "block";
    modalImages.src = this.src;
    modalImages.alt = this.alt;
    caption2.innerHTML = this.alt;
    price2.innerHTML = "Price : MSRP Rp 27.945.000 (Jakarta)";
    paragraph2.innerHTML = "The Vixion is powered by a Liquid Cooled Fuel Injection 149.8 cc 1 Cylinder engine that gives 16.36hp of power at 8500 rpm and 14.5 Nm Torque at 7500 rpm. It comes with the option of a 5-Speed transmission gearbox. The Vixion has a seat height of 795 mm. The Front Tyre size is 90/80 R17 & Rear Tyre size is 120/70 R17.";
}


var modal = document.getElementById('modal-image');
var span = document.getElementById("close");

span.onclick = function(){
    modal.style.display = "none";
}