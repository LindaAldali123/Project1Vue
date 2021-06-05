<template>
    <div class="home">
        <Slider msg="Welcome to Your Vue.js App" />
        <Card />
        <Team />
        <div class="clearfix"></div>
        <Fea />
        <div class="clearfix"></div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Footer from "@/components/footer.vue";
import Team from "@/components/Team.vue";
import Card from "@/components/Card.vue";
import Fea from "@/components/Fea.vue";

export default {
    name: "Home",
    components: {
        Slider,
        Card,
        Team,
        Fea,
        Footer,
    },
};
</script>
<style lang="scss" scoped>
.clearfix {
    clear: both;
}
</style>
