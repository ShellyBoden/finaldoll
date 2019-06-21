<template>
<div class="container">
    <img class="goods" v-bind:src="this.$route.params.picurl" >
    <div class="right_content">
        <div class="text">{{this.$route.params.name}}</div>
        <div class="price">{{this.$route.params.price}}</div>
        <div class="quantity_ar">
        <label class="quantity">數量：</label><input type="number" v-bind:value="`${count}`" v-on:input="count = $event.target.value" min="1" max="99" class="no-spinners">
            <img id="add" @click="adder" src="../assets/add.png"><img id="remove" @click="remover" src="../assets/remove.png">
        </div>
        <div class="btn">
            <button>加入購物車</button><button>加入最愛</button>
        </div>
    </div>
</div>
</template>

<script>
import { fb,db } from "../firebase/index";

export default {
  data(){
    return {
        count:1,
        products: [],
        product: {
          name:null,
          price:null,
          picurl:null,
          detail:null
        }
    }
  },
  firestore(){
      return {
        products: db.collection('ShopList')
      }
  },
  methods:{
      adder(){
          this.count++;
      },
      remover(){
          this.count--;
      }
  }
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_shoppagetop.css";
</style>


