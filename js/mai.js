// Header Scroll
let nav= document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header_scrolled");
    }
    else{
        nav.classList.remove("header_scrolled");
    }
}

// var cursor=document.querySelector(".cursor");
// var cursorinner=document.querySelector(".cursor2");
// var a=document.querySelectorAll("a");
// document.addEventListener("mousemove",function(e){
//     var x=e.clientX;
//     var y=e.clientY;
//     cursor.style.transform='translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%),0)';
// });
// document.addEventListener("mousemove",function(e){
//     var x=e.clientX;
//     var y=e.clientY;
//     cursorinner.style.left=x+"px";
//     cursorinner.style.left=y+"px";
// })

// document.addEventListener("mousedown",function(){
//     cursor.classList.add("click");
//     cursorinner.classList.add("cursorinnerhover");
// })

// document.addEventListener("mouseup",function(){
//     cursor.classList.remove("click");
//     cursorinner.classList.remove("cursorinnerhover");
// })

// var preloader=document.getElementById("loading");
// function myfunction(){
//     preloader.style.display="none";
// }
// window.onload=function(){
//     document.getElementById('loading').style.display="none";
//     document.getElementById('sonu').style.display="block";
// }