<template>
    <div class="sidebar-widgets" data-aos="fade-up">{{ title }}</div>
</template>

<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    data: function () {
        return {
            title: "Eng.LindaAldali",
        };
    },
    name: "blog_sidebar",
    /*filters: {
        uppercase: function (v) {
            return v.toUpperCase();
        },
    },*/
};
</script>
<style lang="scss" scoped>
.sidebar-widgets {
    font-weight: bold;
    font-size: 40px;
    color: rgb(59, 33, 177);
}
</style>
