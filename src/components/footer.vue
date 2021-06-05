<template>
    <div class="Footer">
        <!--Start Footer-->
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-out">
                    <div class="info">
                        <h1>About us</h1>
                        <p>
                            This is a random description that talks About the
                            team, their goals and everything related to the news
                            and type of site activity
                        </p>

                        <p>Read more...</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-out">
                    <div class="info">
                        <h1>Contact Us</h1>

                        <ul>
                            <li>
                                <p>
                                    Send by email<br />
                                    ma3571318z@gmail.com
                                </p>
                            </li>

                            <li>
                                <p>
                                    facebook<br />
                                    www.facebook.com
                                </p>
                            </li>

                            <li>
                                <p>
                                    twitter<br />
                                    www.twitter.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-out">
                    <div class="info">
                        <h1>latest news</h1>

                        <ul>
                            <li>
                                <p>
                                    21 october, 2019<br />
                                    Hello world!<br />
                                    unclassifide
                                </p>
                            </li>

                            <li>
                                <p>
                                    21 october, 2019<br />
                                    Hello world!<br />
                                    unclassifide
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End Footer-->
</template>

<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    name: "Footer",
};
</script>

<style lang="scss" scoped>
.Footer {
    position: relative;
    top: 300px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: left;
}
</style>
