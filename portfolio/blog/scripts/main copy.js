document.addEventListener('DOMContentLoaded',function(){
const header = document.querySelector(".header");
const stikyheader = function(el,isIntersecting){
        if(isIntersecting){
            header.classList.remove("active");   
    
        }else{
            header.classList.add("active"); 

        }
}
const textAnimation = function(el,isIntersecting){
    if(isIntersecting){
        const ta = new TweenTextAnimation(el);
        ta.animate(el);
    }
}
const apper = function(el,isIntersecting){
    if(isIntersecting){
        el.classList.add('inview');
    }
}



    const headerIo = new scrollObserver('.header__trriger', stikyheader, {once: false,threshold:1})
    const textIo = new scrollObserver('.categorys', textAnimation);
    const apperIo = new scrollObserver('.apper', apper);
})


