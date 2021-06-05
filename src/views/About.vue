<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <bout />
        <div class="clearfix"></div>
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import bout from "@/components/bout.vue";
import Footer from "@/components/footer.vue";
export default {
    data: function () {
        return {
            pageName: "About Us",
        };
    },
    name: "About",
    components: {
        bout,
        Footer,
    },
};
</script>
<style lang="scss" scoped>
.about {
    background-color: white;
}
.about h1 {
    margin-top: 50px;
    font-weight: bold;
    font-size: 40px;
    color: rgb(42, 99, 165);
    margin-bottom: 100px;
}
.clearfix {
    clear: both;
}
</style>
