<template>
  <div class="container-grid">
    <Nav/>
    <ContactTital/>
    <Contact/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import ContactTital from "../components/ContactTital";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "ContactPage",
  components: {
    Nav,
    ContactTital,
    Contact,
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

