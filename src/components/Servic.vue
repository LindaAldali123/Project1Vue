<template>
    <!-- ======= Service Details Section ======= -->
    <section class="service-details">
        <div class="container">
            <div class="row">
                <div
                    class="col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                >
                    <div class="card">
                        <div class="card-img">
                            <img
                                src="../assets/service-details-1.jpg"
                                alt="..."
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <a href="#">Our Mission</a>
                            </h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur elit,
                                sed do eiusmod tempor ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat
                            </p>
                            <div class="read-more">
                                <a href="#"
                                    ><i class="icofont-arrow-right"></i> Read
                                    More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                >
                    <div class="card">
                        <div class="card-img">
                            <img
                                src="../assets/service-details-2.jpg"
                                alt="..."
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><a href="#">Our Plan</a></h5>
                            <p class="card-text">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo
                            </p>
                            <div class="read-more">
                                <a href="#"
                                    ><i class="icofont-arrow-right"></i> Read
                                    More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                >
                    <div class="card">
                        <div class="card-img">
                            <img
                                src="../assets/service-details-3.jpg"
                                alt="..."
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <a href="#">Our Vision</a>
                            </h5>
                            <p class="card-text">
                                Nemo enim ipsam voluptatem quia voluptas sit aut
                                odit aut fugit, sed quia magni dolores eos qui
                                ratione voluptatem sequi nesciunt Neque porro
                                quisquam est, qui dolorem ipsum quia dolor sit
                                amet
                            </p>
                            <div class="read-more">
                                <a href="#"
                                    ><i class="icofont-arrow-right"></i> Read
                                    More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                >
                    <div class="card">
                        <div class="card-img">
                            <img
                                src="../assets/service-details-4.jpg"
                                alt="..."
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><a href="#">Our Care</a></h5>
                            <p class="card-text">
                                Nostrum eum sed et autem dolorum perspiciatis.
                                Magni porro quisquam laudantium voluptatem. In
                                molestiae earum ab sit esse voluptatem. Eos
                                ipsam cumque ipsum officiis qui nihil aut
                                incidunt aut
                            </p>
                            <div class="read-more">
                                <a href="#"
                                    ><i class="icofont-arrow-right"></i> Read
                                    More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Service Details Section -->
</template>
<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    name: "Servic",
};
</script>
<style lang="scss" scoped>
.service-details {
    padding-bottom: 10px;
}

.service-details .card {
    border: 0;
    padding: 0 30px;
    margin-bottom: 60px;
    position: relative;
}

.service-details .card-img {
    width: calc(100% + 60px);
    margin-left: -30px;
    overflow: hidden;
    z-index: 9;
    border-radius: 0;
}

.service-details .card-img img {
    max-width: 100%;
    transition: all 0.3s ease-in-out;
}

.service-details .card-body {
    z-index: 10;
    background: #fff;
    border-top: 4px solid #fff;
    padding: 30px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    margin-top: -60px;
    transition: 0.3s;
}

.service-details .card-title {
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
}

.service-details .card-title a {
    color: #1e4356;
    transition: 0.3s;
}

.service-details .card-text {
    color: #5e5e5e;
}

.service-details .read-more a {
    color: #777777;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    transition: 0.3s;
}

.service-details .read-more a:hover {
    color: #68a4c4;
}

.service-details .card:hover img {
    transform: scale(1.1);
}

.service-details .card:hover .card-body {
    border-color: #68a4c4;
}

.service-details .card:hover .card-body .card-title a {
    color: #68a4c4;
}
</style>
