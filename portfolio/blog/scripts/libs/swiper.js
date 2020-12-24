document.addEventListener('DOMContentLoaded',function(){
    const swiper = new swiperslider('.swiper-container');
     swiper.start();
})




  class swiperslider {
      constructor(el){
          this.el = el;
          this.swiper = this._initswiper();
      }

      _initswiper(){
          return new Swiper(this.el, {
            effect: 'coverflow',
            loop:true,
            speed:1000,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: '1',
            breakpoints: {
                960: {
                    slidesPerView: 2,
                }
            },
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
      })
    }
    start(options={}){
        options = Object.assign({
                delay: 4000,
                disableOnInteraction: false,
        }),
            this.swiper.params.autoplay =options;
            this.swiper.autoplay.start();
    }
    stop(){
        this.swiper.autoplay.stop();
    }
  }