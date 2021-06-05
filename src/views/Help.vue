<template>
    <div class="our-help">
        <h1>{{ pageName }}</h1>
        <Servic />
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Servic from "@/components/Servic.vue";
export default {
    data: function () {
        return {
            pageName: "Services",
        };
    },
    name: "help",
    components: {
        Footer,
        Servic,
    },
};
</script>
<style lang="scss" scoped>
.our-help h1 {
    margin-top: 40px;
    font-weight: bold;
    font-size: 40px;
    color: rgb(42, 99, 165);
    margin-bottom: 80px;
}
.our-help p {
    font-size: 20px;
    color: #333;
}
</style>
