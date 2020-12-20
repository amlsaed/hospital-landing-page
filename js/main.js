$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('#owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

  $('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('#owl-carousel3').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('#owl-carousel4').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
// header top fixed
window.onscroll = function() {fixednav()}; 
function fixednav(){
    var fixed = document.getElementById("navFixed")
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        fixed.style.position="fixed";
        fixed.style.background="#fff";
        fixed.style.width="100%";
        fixed.style.top="0"
        fixed.style.boxShadow="0px 5px 10px 0px rgba(106, 106, 106, 0.15)"
    }else{
        fixed.style.position="relative";
        fixed.style.background="rgba(255, 255, 255, 0.9)";
    }
};
// change hero title 
var herotitel = document.getElementById("herotitle");
var titels = ["Crutches","X-ray","Pulmonary","Cardiology","DentalCare"];
var i=0;
function changetitle(){
    herotitel.innerText=titels[i];
    herotitel.style.background="url(./imgs/hero-yellow.svg)"
    i ++
    if(i > titels.length-1){
        i=0
    }
}
setInterval(changetitle,1000);
// home-hero
var heroimg = document.getElementById("home-hero");
var imgsrc = ["imgs/hero-img.png", "imgs/hero-img1.png", "imgs/hero-img2.png"];
var j=0;
function changeimg(){
    heroimg.setAttribute("src",imgsrc[j]);
    j++;
    if(j > imgsrc.length - 1 ){
        j=0;
    }
}
setInterval(changeimg,1000)
//nav active color
