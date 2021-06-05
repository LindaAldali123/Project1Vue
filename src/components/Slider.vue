<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img
                    class="d-block w-100"
                    :src="currentImg"
                    width="1100"
                    height="500"
                    :alt="currentAlt"
                />
            </div>
        </transition-group>

        <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            @click="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            @click="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            images: [
                require("@/assets/s1.jpg"),
                require("@/assets/s2.jpg"),
                require("@/assets/s3.jpg"),
                require("@/assets/s4.jpg"),
            ],
            text_alt: [
                "First slide",
                "Second slide",
                "Third slide",
                "Fourth slide",
            ],
            timer: null,
            currentIndex: 0,
        };
    },

    mounted: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = this.next;
        },

        next: function () {
            this.currentIndex += 1;
        },
        prev: function () {
            this.currentIndex -= 1;
        },
    },

    computed: {
        currentImg: function () {
            return this.images[
                Math.abs(this.currentIndex) % this.images.length
            ];
        },

        currentAlt: function () {
            return this.text_alt[
                Math.abs(this.currentIndex) % this.text_alt.length
            ];
        },
    },
};
</script>
