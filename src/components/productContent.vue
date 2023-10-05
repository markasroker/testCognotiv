<script setup>
    import { ref } from 'vue'

    const slider = ref([
        {
            title: 'We Solve Your',
            bigFont: 'PROBLEM',
        },
        {
            title: 'We Know You Have',
            bigFont: 'PROBLEM',
        }
    ]);
    
    const sliderShow = ref(0);

    function nextSlide(){
        
        if (sliderShow.value==1){
            sliderShow.value = 0
        }else{
            sliderShow.value++
        }
    }
</script>

<template>
    <div class="z-10 relative">
        <div v-show="sliderShow === index" v-for="(slide, index) in slider" :key="index">
            <div class="product w-[581px] h-[500px] leading-normal relative text-[#2D2D2D] mt-44 ml-auto mr-16 px-14 py-14">
                <h2 class="font-bold text-6xl">{{slide.title}}</h2>
                <h3 class="text-7xl font-bold mt-11 text-[#fff]">
                    {{ slide.bigFont }}
                </h3>
            </div>
        </div>
        <img @click="nextSlide()" src="/public/State-Default.png" class="cursor-pointer absolute bottom-20 right-0"/>
    </div>
</template>


<style>
    h3{
        background: linear-gradient(to left, #FFB800 50%, #fff 50%);
        background-size: 200% 100%;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: swipe 2s linear infinite;
    }
    @keyframes swipe {
        to {
        background-position: 200% center;
        }
    }
    .showtime .product::before,
    .showtime .product::after{
        -webkit-transform: scale(1); 
        transform: scale(1);
    }
    .product{
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.50);
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.15);
        transition: all ease-in .3s;
        opacity: 0;
        right: -500px;
        animation: moveImg .5s ;
    }
    .showtime .product{
        opacity: 1;
        right: 0px;
    }
    @keyframes moveImg {
        from {
            right: -20%;
            opacity: 0;
        }
        to {
            right: 0%;
            opacity: 1;
        }
    }
</style>