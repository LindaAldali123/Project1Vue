<template id="navBar">
    <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        v-bind:class="{ navbarOpen: show }"
    >
        <div class="container">
            <a class="navbar-brand" href="#"
                ><div class="logo">Eng Linda</div></a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                @click.stop="toggleNavbar()"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                v-bind:class="{ show: show }"
            >
                <ul class="navbar-nav mr-auto text-right">
                    <li class="nav-item active">
                        <router-link to="/" exact>
                            <a class="nav-link">Home</a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/blog">
                            <a class="nav-link">Blog</a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/about">
                            <a class="nav-link">About</a>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/help" replace>
                            <a class="nav-link">Services</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "AppHeader",
    data() {
        return {
            show: true,
        };
    },
    methods: {
        toggleNavbar() {
            this.show = !this.show;
        },
    },
};
</script>
<style lang="scss" scoped>
.navbar {
    height: 80px;
}
.collapse {
    background-color: #212529;
    color: #fff;
}
#navBar {
    background-color: #333;
    color: #fff;
    overflow: hidden;
}
.logo {
    font-size: 24px;
    padding: 0px;
    float: left;
    width: 200px;
}
ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
    li {
        padding: 0px;
        display: inline-block;
        font-size: 18px;
        a {
            color: #fff;
            text-decoration: none;
        }
    }
}
</style>
