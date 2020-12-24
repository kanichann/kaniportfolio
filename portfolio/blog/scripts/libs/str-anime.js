// const str=document.querySelector('.blog__category');
// const strspans = str.innerHTML.trim().split('');
// let spanArray =''




// strspans.forEach((strspan)=>{
//     spanArray = spanArray+'<span class="char">'+strspan+'</span>'
// });
// str.innerHTML = spanArray;

class TextAnimation{
    constructor(el){
      this.DOM = {};
      this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el); 
      this.chars = this.DOM.el.innerHTML.trim().split("");
      this.DOM.el.innerHTML =this._init(); 
    };
    _init(){
       return this.chars.reduce((acc,curr)=>{
           curr = curr.replace(/\s+/,'&nbsp;');
           return acc+'<span class="char">'+curr+'</span>';
       },'')
    };
    animate() {
                this.DOM.el.classList.toggle('inview');
            }
    }

class TweenTextAnimation extends TextAnimation {
    constructor(el){
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll(".char");
    }
    animate(){
        // this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c,i)=>{
            TweenMax.to(c,.6,{
                ease:Back.easeOut,
                delay:.7+i*.1,
                startAt:{y:'-50%',opacity:0},
                y:'0%',
                opacity:1,
            })
        })
    }
}

// class TextAnimation {
//     constructor(el) {
//         this.el = document.querySelector(el);
//         this.chars = this.el.innerHTML.trim().split("");
//         this.el.innerHTML = this._splitText();
//     }
//     _splitText() {
//         return this.chars.reduce((acc, curr) => {
//             curr = curr.replace(/\s+/, '&nbsp;');
//             return `${acc}<span class="char">${curr}</span>`;
//         }, "");
//     }
//     animate() {
//         this.el.classList.toggle('inview');
//     }
// }