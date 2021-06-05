<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6" data-aos="fade-up">
                    <img src="../assets/about.png" class="img-fluid" alt="" />
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-up">
                    <h3>
                        Voluptatem dignissimos provident quasi corporis
                        voluptates
                    </h3>
                    <p class="font-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <ul>
                        <li>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat
                        </li>
                        <li>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit
                        </li>
                        <li>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate trideta storacalaperda
                        </li>
                    </ul>
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- End About Section -->
</template>

<script>
require(["aos"], function (AOS) {
    AOS.init({
        easing: "ease-in-out-sine",
    });
});
export default {
    name: "about",
};
</script>
<style lang="scss" scoped>
.about {
    background-color: white;
}
.about .content h3 {
    font-weight: 700;
    font-size: 32px;
    color: #5f687b;
    text-align: left;
}

.about .content ul {
    list-style: none;
    padding: 0;
}

.about .content ul li {
    padding-bottom: 10px;
}

.about .content p:last-child {
    margin-bottom: 0;
}
</style>
