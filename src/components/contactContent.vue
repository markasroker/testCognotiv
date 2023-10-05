<template>
    <div class="z-10 relative">
        <div class="about-card w-[581px] leading-normal relative text-[#2D2D2D] mt-44 ml-auto mr-16 px-14 py-14">
            <div class="mb-7">
                <stong class="text-4xl font-bold leading-normal">Type your <br/> beautiful name</stong>
                <input placeholder="in here of course :)" class="mt-7 w-full rounded-md px-4 py-5 outline-none font-semibold text-2xl text-center">
            </div>
            <div class="mb-7">
                <stong class="text-4xl font-bold leading-normal">Protect your email<br/> address</stong>
                <input placeholder="but not in here :)" class="mt-7 w-full rounded-md px-4 py-5 outline-none font-semibold text-2xl text-center">
            </div>
            <button class="bg-[#FFB800] relative rounded-lg mt-6 h-16 text-2xl font-bold text-[#fff] w-full">Submit</button>
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