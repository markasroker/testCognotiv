<template>
    <div class="z-10 relative">
        <div class="about-card w-[581px] leading-normal relative text-[#2D2D2D] mt-44 ml-auto mr-16 px-14 py-14">
            <h2 class="font-bold text-6xl">Our People Come First</h2>
            <p class="text-4xl font-semibold mt-11">
                We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.
            </p>
        </div>
        <div class="btn-normal ml-auto mr-16 text-right mt-10">
            <button class="bg-[#FFB800] relative rounded-lg w-52 h-16 text-2xl font-bold text-[#fff] ">Learn more</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutContent'
}
</script>

<style>
    .about-card::after,
    .about-card::before{
        content: '';
        position: absolute;
        background-color:#FFB800;
        -webkit-transform: scale(0); 
        transform: scale(0);
        transition: all ease-in-out 1s;
    }
    .about-card::before{
        width: 80px;
        height: 14px;
        left:-50px;
        top:-50px;
    }
    .about-card::after{
        width: 14px;
        height: 80px;
        left:-50px;
        top:-50px;
    }
    .showtime .about-card::before,
    .showtime .about-card::after{
        -webkit-transform: scale(1); 
        transform: scale(1);
    }
    .about-card{
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.50);
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.15);
        transition: all ease-in .3s;
        opacity: 0;
        right: -500px;
    }
    .showtime .about-card{
        opacity: 1;
        right: 0px;
    }
    .btn-normal button{
        transition: all ease-in .3s;
        opacity: 0;
        bottom:-150px;
    }
    .showtime .btn-normal button{
        opacity: 1;
        bottom:0px;
    }
</style>