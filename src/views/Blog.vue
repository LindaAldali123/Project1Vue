<template>
    <div class="our-blog">
        <h1>{{ pageName }}</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPosts
                            v-for="post in posts"
                            v-bind:key="post.id"
                            :views="post.views"
                            :title="post.title"
                            :content="post.content"
                            :date="post.date"
                            :author="post.author"
                            :category="post.category"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import Footer from "@/components/footer.vue";
import JsonPosts from "../json/blog_posts.json";

export default {
    data: function () {
        return {
            pageName: "Blog",
            posts: JsonPosts,
        };
    },
    name: "blog",
    components: {
        BlogPosts,
        BlogSidebar,
        Footer,
    },
};
</script>
<style lang="scss" scoped>
.our-blog h1 {
    font-weight: bold;
    font-size: 40px;
    color: rgb(42, 99, 165);
}
.our-blog p {
    font-size: 20px;
    color: #333;
}
</style>
