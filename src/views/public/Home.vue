<template>
    <div class=" bg--grey-dark">
        <Hero></Hero>
    </div>
</template>
<script>
const Hero = () => import('@/components/home/Hero.vue');
export default {
    name: 'Home',
    components: {
        Hero
    }
};
</script>
