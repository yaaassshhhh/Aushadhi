let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper2 .left > div").length -1;
console.log(totalSlides);
currentSlide=totalSlides;
slider.querySelector(".controls .up ").addEventListener("click",()=>{
    if(currentSlide==0)
    {
        console.log("clicked fuck offf");
        return;
    }
    console.log("clicked");
    currentSlide-- ;
    // slider.querySelector(".wrapper2 .left div").computedStyleMap.marginTop = `${currentSlide *-100}vh`;
    // slider.querySelector(".wrapper2 .right div").computedStyleMap.marginTop = `${(totalSlides-currentSlide) *-100}vh`;
    slider.querySelector(".wrapper2 .left div").style.marginTop = `${currentSlide *-100}vh`;
slider.querySelector(".wrapper2 .right div").style.marginTop = `${(totalSlides-currentSlide) *-100}vh`;

});

slider.querySelector(".controls .down ").addEventListener("click",()=>{
    if(currentSlide==totalSlides)
    {
        return;
    }
    currentSlide++ ;
    slider.querySelector(".wrapper2 .left div").style.marginTop = `${currentSlide *-100}vh`;
    slider.querySelector(".wrapper2 .right div").style.marginTop = `${(totalSlides-currentSlide) *-100}vh`;
});