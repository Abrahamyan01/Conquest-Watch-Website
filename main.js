//Slider

const watchSlide=new Swiper(".swiper",{
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination:{
   el:".swiper-pagination",   
   
   renderBullet: function (index, className) {
     return '<span class="' + className + '">' + (0+`${index+ 1}`) + "</span>";
   },
  
  }

});


//Clock

function clock(){
   const hoursArrow=document.querySelector(".hours");
   const minutesArrow=document.querySelector(".minutes");
   const secondsArrow=document.querySelector(".seconds");
   const deg=6;
   setInterval(()=>{
    const day=new Date();
    const hours=day.getHours()*30;
    const minutes=day.getMinutes()*deg;
    const seconds=day.getSeconds()*deg;
    

    hoursArrow.style.transform=`rotateZ(${hours+(minutes/12)}deg)`;
    minutesArrow.style.transform=`rotateZ(${minutes}deg)`;
    secondsArrow.style.transform=`rotateZ(${seconds}deg)`;
   })
}

clock();

//Menu 
   const icon=document.querySelector(".menuactive");
   const menu=document.querySelector(".mobile");
   const active=document.querySelector(".active");

   icon.addEventListener("click",function(){        
    if(menu.classList.contains("active")){
      menu.classList.remove("active");
    }else{
      menu.classList.add("active");
    }
   })




