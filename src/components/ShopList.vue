<template>
<div class="container">
  <div v-for="product in products" :key="product" :class="`grid-item-${product}`">
    <div :class="`img-${product}`">
    <img v-bind:src="product.picurl" @click="select(product)">
    </div>
    <div :class="`text-${product}`">{{ product.name }}</div>
    <div :class="`price-${product}`">{{ product.price }}</div>
  </div>
</div>
</template>

<script>
import { fb,db } from "../firebase/index";
import router from "../router";

export default {
  data(){
    return {
        products: [],
        product: {
          name:null,
          price:null,
          picurl:null
        }
    }
  },
  firestore(){
      return {
        products: db.collection('ShopList')
      }
  },
  methods:{
    select: function(product) {
      var name=product.name
      var price=product.price
      var picurl=product.picurl
      var detail=product.detail
      this.$router.push({name:'ShopPage',params: { name,price,picurl,detail}})
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_shoplist.css";
</style>
