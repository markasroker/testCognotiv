

<template>
  
  <main class="flex flex-col items-center justify-start h-full mt-52 mb-14">
    <div id="hover-anim" class="relative">
      <div class="top-strip h-[18px] absolute -right-[160px] -top-[145px]"></div>
      
      <div class="overflow-hidden">
        <img src="/public/lamp.jpg" class="home-main-img transition ease-in duration-300"/>
      </div>
      <h2 class="absolute top-0 left-0 -mt-32 -ml-28 text-primary text-[175px] font-bold leading-normal">We Create</h2>
      
      <RouterLink to="/about" class="home-nav z-10 hover:text-[#fff] -ml-[4.6rem] text-primary absolute bottom-[107px] font-bold leading-none text-[72px] flex items-center flex-row">
        AWESOME THINGS <img src="/public/arrow.png" class="ml-16"/>
      </RouterLink>

      <div class="bottom-strip h-[18px] relative -left-[160px] mt-[125px]"></div>
    </div>
    
  </main>
  
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>


<style>
.home-nav::before{
  content: '';
  position: absolute;
  background-color: #FFB800;
  height: 100px;
  width: 0%;
  border-radius: 6px;
  z-index: -2;
  left:-25px;
  transition: all ease .4s;
}
.home-nav:hover::before{
  width: 106%;
}
.home-nav:hover img{
    filter: brightness(0) invert(1);
}
.home-main-img{
    -webkit-filter: grayscale(100%); 
    filter: grayscale(100%);
}
#hover-anim:hover .home-main-img{
    -webkit-filter: grayscale(0); 
    filter: grayscale(0);
    transform: scale(1.1);
}
.bottom-strip,
.top-strip{
    width: 140px;
    transition: all ease .4s;
}
.top-strip{
    background: linear-gradient(to left, #FFB800 50%, transparent 50%);
    background-size: 200% 100%;
}
#hover-anim:hover .top-strip{
    background-position:right top;
}
.bottom-strip{
    background: linear-gradient(to left, #FFB800 50%, transparent 50%);
    background-size: 200% 100%;
}
#hover-anim:hover .bottom-strip{
    background-position:right top;
}
.home-nav{
  left:-80%;
  opacity: 0;
  transition: all ease-out .4s;
}
#hover-anim:hover .home-nav{
  left:0;
  opacity: 1;
}
.bottom-strip::before,
.top-strip::before{
    content: "";
    position: absolute;
    width: 67px;
    height: 18px;
    transition: all ease .4s;
    background: linear-gradient(to left, #FFB800 50%, transparent 50%);
    background-size: 200% 100%;
}
.top-strip::before{
    left:-87px;
}
.bottom-strip::before{
    right:-87px;
}

#hover-anim:hover .bottom-strip::before,
#hover-anim:hover .top-strip::before{
    background-position:right top;
}

</style>