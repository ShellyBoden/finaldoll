<template>
  <div class="container-grid">
    <Nav/>
    <CommentTital/>
    <Comment/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import CommentTital from "../components/CommentTital";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

export default {
  name: "CommentPage",
  components: {
    Nav,
    CommentTital,
    Comment,
    Footer
  },
  computed: mapGetters(['totalNews', 'selectedNews']),
  methods: mapActions(['init']),
  created() {
    this.init();
  }
};
</script>

<style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
</style>

