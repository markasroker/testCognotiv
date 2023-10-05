<template>
    <ul class="font-bold">
        <li><RouterLink to="/about">About Us</RouterLink></li>
        <li><RouterLink to="/product">Our Product</RouterLink></li>
        <li><RouterLink to="/contact">Contact Us</RouterLink></li>
    </ul>
</template>

<script>
    export default{
        name: 'Navigation',
        data() {
            return {
                active: null
            }
        },
        
    }
</script>

<style>
    ul{
        margin-top: 180px;
        margin-left: 40px;
        position: absolute;
        z-index: 2;
    }
    ul li{
        line-height: normal;
        margin-bottom: 30px;
        cursor: pointer;
        font-size: 72px;
        position: relative;
        padding-left: 160px;
    }
    ul li:hover a{
        opacity: .5;
    }
    ul li:hover .router-link-active{
        opacity: unset;
    }
    .router-link-active{
        color:#FFB800;
    }
    .router-link-active::before {
        content:'';
        width: 128px;
        height: 17px;
        position: absolute;
        left:0;
        top:35px;
        background-color:#FFB800;
    }
</style>