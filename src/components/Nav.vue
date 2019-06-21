<template>
  <nav class="nav">
    <input @click="onCheck" type="checkbox" class="nav__checkbox" id="nav-toggle">
    <label for="nav-toggle" class="nav__btn">
      <button class="nav__icon"></button>
    </label>


  <div class="container">
    <div class="container_1">
      <router-link to="/CommentPage">
        <ul @click="onRoute">comment</ul>
      </router-link>
      <ul>
        <a href="https://shellyboden.github.io/0607-web-design/html/index.html">information</a>
      </ul>
      <router-link to="/GoodsPage">        
        <ul @click="onRoute">goods</ul>
      </router-link>
    </div>

    <div class="icon_1">
      <router-link to="*"> 
        <img @click="onRoute" src="../assets/ICON.png">
      </router-link>
    </div>

    <div class="container_1">
      <router-link to="/ContactPage">
        <ul>contact</ul>
      </router-link>
      <router-link to="*">
        <img @click="onRoute" class="icon" src="../assets/heart.png">
      </router-link>
      <router-link to="/LoginPage">
        <img @click="onRoute" class="icon" src="../assets/user.png">
      </router-link>
      <router-link to="*">
        <img @click="onRoute" class="icon"  src="../assets/cart.png">
      </router-link>
    </div>
  </div>


    <div id="myNav" :class="`overlay ${myNav}`">
      <div class="overlay-content">
        <router-link to="*">
          <p @click="onRoute">home</p>
        </router-link>
        <router-link to="/CommentPage">
          <p @click="onRoute">comment</p>
        </router-link>
        <router-link to="/GoodsPage">
          <p @click="onRoute">goods</p>
        </router-link>
        <router-link to="/ContactPage">
          <p @click="onRoute">contact</p>
        </router-link>
        <router-link to="/LoginPage">
          <p @click="onRoute">login</p>
        </router-link>
          <p><a href="https://shellyboden.github.io/0607-web-design/html/index.html">information</a></p>

      </div>
    </div>

  </nav>
</template>



<script>
export default {
  name: "Nav",
  data() {
    return {
      checked: false,
      size: "lg",
      myNav: "hide-lg"
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 1000) {
        this.size = "lg";
        if (!this.checked) this.myNav = "notransition hide-lg";
      } else {
        this.size = "sm";
        if (!this.checked) this.myNav = "notransition hide-sm";
      }
    },

    onCheck() {
      if (this.checked && this.size == "sm") this.myNav = "hide-sm";
      else if (this.checked && this.size == "lg") this.myNav = "hide-lg";
      else this.myNav = "show";
      this.checked = !this.checked;
    },

    onRoute() {
      this.checked = !this.checked;
    }
  },

  created() {
    window.addEventListener('resize',this.onResize);
    if (window.innerWidth > 1000) {
      this.size = "lg";
      this.myNav = "hide-lg";
    } else {
      this.size = "sm";
      this.myNav = "hide-sm";
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_nav.css";

.notransition {
  transition: 0s !important;
}

.show {
  transition: 0.5s;
  width: 100%;
  height: 100%;
}

.hide-lg {
  transition: 0.5s;
  width: 0%;
  height: 100%;
}

.hide-sm {
  transition: 0.5s;
  width: 100%;
  height: 0%;
}

.overlay {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $color-primary;
  overflow-x: hidden;
  overflow-y: hidden;
}

.overlay-content {
  position: relative;
  top: 10%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  color: $color-black;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}
</style>
