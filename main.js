let section =document.querySelector(".part");
let spans =document.querySelectorAll(" .part div span");


window.onscroll=function(){
    if(window.scrollY <=section.offsetTop){
    spans.forEach((span) =>{
        span.style.width= span.dataset.width;
    });
    }
    };
