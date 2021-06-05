<template>
    <!-- Start Latest Posts -->
    <div class="card">
        <div class="container pos">
            <div class="row">
                <!-- Start Grid column -->
                <div class="col-lg-4" data-aos="zoom-out">
                    <div class="card" style="width: 18rem">
                        <img
                            src="../assets/post01.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h4 class="card-title">Photography</h4>
                            <p class="card-text">
                                It is along established fact that areader will
                                be distracted by the readable content of apage
                                when looking at it's layout.
                            </p>
                            <a href="#" class="btn btn-primary">Read....</a>
                        </div>
                    </div>
                </div>
                <!-- Start Grid column -->
                <div class="col-lg-4" data-aos="fade-up">
                    <div class="card" style="width: 18rem">
                        <img
                            src="../assets/post02.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h4 class="card-title">Portfolio</h4>
                            <p class="card-text">
                                It is along established fact that areader will
                                be distracted by the readable content of apage
                                when looking at it's layout.
                            </p>
                            <a href="#" class="btn btn-primary">Read....</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" data-aos="zoom-out">
                    <div class="card" style="width: 18rem">
                        <img
                            src="../assets/post03.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h4 class="card-title">Features</h4>
                            <p class="card-text">
                                It is along established fact that areader will
                                be distracted by the readable content of apage
                                when looking at it's layout.
                            </p>
                            <a href="#" class="btn btn-primary">Read....</a>
                        </div>
                    </div>
                </div>
                <!--  Grid column -->
            </div>
        </div>
    </div>

    <!-- End Latest Posts -->
</template>

<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    name: "Card",
};
</script>

<style scoped lang="scss">
.pos {
    margin-top: 40px;
}
.card {
    margin: 10px;
    text-align: left;
}
</style>
