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
window.onscroll = function() {fixednav(),
    navcolor('home','navlink1'),navcolor('about','navlink2'),navcolor('department','navlink3'),
    navcolor('doctors','navlink4'),navcolor('gallery','navlink5'),navcolor('pricing','navlink6'),navcolor('blog','navlink7'),
    navcolor('contact','navlink8')
}; 
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
setInterval(changetitle,2000);
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
//drag img
dragElement(document.getElementById("afterimg"));

function dragElement(elmnt ) {
  var ctrlbtn = document.getElementById("ctrlbtn");
  var aftercontainer = document.getElementById("aftercontainer");
  var afterimg = document.getElementById("afterimg");
  
  var pos1 = 0, pos3 = 0;
  if (ctrlbtn && afterimg.offsetWidth < 500) {
    // if present, the header is where you move the DIV from:
    ctrlbtn.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    var xleft = document.getElementById("aftercontainer").offsetLeft;
    var xwidth = document.getElementById("aftercontainer").offsetWidth;
    // set the element's new position:
    if(pos3 > xleft + 10 && pos3 < xleft  + xwidth  ){
      ctrlbtn.style.left =(elmnt.offsetLeft - pos1 -25) + "px";
      ctrlbtn.style.position = "absolute" ;
      elmnt.style.left = (elmnt.offsetLeft - pos1   ) + "px";
      elmnt.style.width = xwidth - (elmnt.offsetLeft - pos1 +20  ) + "px";

    }else if(pos3 > xleft + 10  && pos3 < xleft + xwidth  &&elmnt.style.width === "0"){
      ctrlbtn.style.left = xleft + xwidth  ;
      elmnt.style.left = xleft + xwidth  ;
      elmnt.style.width ="0";
    }else{
      ctrlbtn.style.left = xleft  ;
      elmnt.style.left = xleft;
      elmnt.style.width = xwidth-20;

    }
    
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// nav color

function navcolor(sec,link){
    var link1 = document.getElementById(sec).getBoundingClientRect().top;
    // var link2 = document.getElementById("about").getBoundingClientRect().top;
    // var link3 = document.getElementById("department").getBoundingClientRect().top;
    // var link4 = document.getElementById("doctors").getBoundingClientRect().top;
    // var link5 = document.getElementById("gallery").getBoundingClientRect().top;
    // var link6 = document.getElementById("pricing").getBoundingClientRect().top;
    // var link7 = document.getElementById("blog").getBoundingClientRect().top;
    // var link8 = document.getElementById("contact").getBoundingClientRect().top;

    var navlink1 =document.getElementById(link);
    if(link1 <= 650.375&& link1 > -650.375 ){
        navlink1.style.color="#0cb8b6";
        navlink1.style.borderBottom="2px solid #0cb8b6";
        
    }else {
        navlink1.style.color= "#666";
        navlink1.style.borderBottom="2px solid transparent";

 
    }
}