<template>
    <!--Start Our Team-->
    <div class="our-team">
        <div class="container">
            <div class="box" data-aos="zoom-out">
                <h2 class="special-heading">Our Team</h2>
                <p>
                    lorem ipsum dolor sit amet, consectuter adipiscing elit .
                    Praesent a lacus facilisis, placerat magna sit amet, rhoncus
                    lacus,Cras porta eget nbha vel vehcula .
                </p>
            </div>
            <div class="box" data-aos="zoom-out">
                <div class="overlay">Linda</div>
                <img src="../assets/01.jpg" alt="Image1" />
            </div>
            <div class="box" data-aos="zoom-out">
                <div class="overlay">Kinda</div>
                <img src="../assets/02.jpg" alt="Image2" />
            </div>
            <div class="box" data-aos="zoom-out">
                <div class="overlay">Maha</div>
                <img src="../assets/03.jpg" alt="Image3" />
            </div>
            <div class="box" data-aos="zoom-out">
                <div class="overlay">Loreen</div>
                <img src="../assets/04.jpg" alt="Image4" />
            </div>
        </div>
    </div>
    <!--End Our Team-->
</template>

<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    name: "Team",
};
</script>

<style lang="scss" scoped>
.our-team {
    margin-top: 50px;
    text-align: left;
    padding: 40px 20px;
}
.our-team .box {
    float: left;
}
.our-team .box p {
    color: #888;
    line-height: 1.4;
    font-size: 14px;
}
@media (max-width: 767px) {
    .our-team .box p {
        color: #888;
        line-height: 1.2;
        font-size: 6px;
    }
}
.our-team .box:first-child {
    width: 35%;
}
.our-team .box:not(:first-child) {
    width: 15.25%;
    margin-left: 1%;
    position: relative;
    transition: all 1s ease-in-out;
}
.our-team .box:not(:first-child) .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    line-height: 153px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-color: rgba(82, 197, 243, 0.9);
    display: none;
}
.our-team .box:not(:first-child):hover .overlay {
    display: block;
}
.our-team .box:not(:first-child) img {
    width: 100%;
}
.our-team h2 {
    padding: 0 0 15px;
}
</style>
