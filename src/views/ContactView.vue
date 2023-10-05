<template>
  <div class="delaying contact-page flex flex-row">

    <!-- Left Panel -->
    <div class="w-1/3">
      <BackButton />
      <Navigation />
    </div>

    <!-- Right Panel  -->
    <div class="img-wrap ml-auto w-2/3 pb-40 relative">
        <img src="/public/contact-img.png" class="main-img absolute top-0 left-0 h-full w-full"/>
        <ContactContent />
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue'
  import BackButton  from '../components/BackButton.vue'
  import ContactContent from '../components/contactContent.vue'
  export default {
    data() {
      return {
        countDown: 1, 
      }
    },
    components:{
      Navigation,
      BackButton,
      ContactContent,
    },
    methods: {
      countDownTimer() {
        if (this.countDown > 0) {
          setTimeout(() => {
            this.countDown -= 1
            this.countDownTimer()
          }, 1000)
        }
        else{
          let delay = document.querySelector(".delaying");
          delay.classList.add("showtime");
        }
      }
    },
    created() {
      this.countDownTimer()
    }
  }
  
</script>