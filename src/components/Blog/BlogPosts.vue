<template>
    <div class="post-box" data-aos="fade-up">
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">
            {{ content }}
            <!--{{ content | shorten(10,'...')}}-->
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 right text-right">
                <span class="post-category">{{ category }}</span>
                <!--{{category | uppercase}}-->
            </div>
        </div>
    </div>
</template>

<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    props: ["views", "title", "content", "date", "author", "category"],
    name: "post",
};
</script>
<style lang="scss" scoped>
.post-box {
    margin-top: 38px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4caf50;
        border-radius: 4px;
        padding: 1px 5px;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
    .post-title {
        color: #818080 !important;
    }
    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #666;
    }
    .post-author {
        background-color: #607d8b;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-category {
        background-color: #e91e63;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .right {
        text-align: right;
    }
}
</style>
