
const blog = document.querySelectorAll('.blog');
const blogThrough = document.querySelectorAll('.blog__through');


for(let i = 0 ; i < blog.length; i++){
   blog[i].addEventListener('mouseover',function(){
      blogThrough[i].classList.add('slidein');
  });
   blog[i].addEventListener('mouseleave',function(){
      blogThrough[i].classList.add('slideout');
      setTimeout(function(){
        // blogThrough[i].style.transform='translate(-100%)';
        blogThrough[i].classList.remove('slidein');
        blogThrough[i].classList.remove('slideout');
      },500);
  });

   }

