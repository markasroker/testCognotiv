<template>
    <div class="z-10 relative">
        <div class="about-card w-[581px] h-[500px] leading-normal relative text-[#2D2D2D] mt-44 ml-auto mr-16 px-14 py-14">
            <h2 class="font-bold text-6xl">We Solve <br/> Your</h2>
            <h3 class="text-7xl font-bold mt-11">
                PROBLEM
            </h3>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'AboutContent'
}
</script>

<style>
    
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
</style>