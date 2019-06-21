<template>

<div class="container">
  <div v-for="comment in 1" :key="comment" :class="`grid-item-${comment}`">
    <input type="text" placeholder="請輸入名字" v-model="testname"><br>
    <textarea placeholder="寫點什麼吧！" rows="4" cols="10" maxlength="100" v-model="testcomment"></textarea>
    <button @click="addProduct(testname,testcomment)">我寫好了！</button>
  </div>
  <div v-for="comment in comments" :key="comment" :class="`grid-item-${comment}`">
    <input type="text" placeholder="請輸入名字" v-bind:value="comment.name" readonly="readonly"><br>
    <textarea placeholder="寫點什麼吧！" rows="4" cols="10" maxlength="100" v-bind:value="comment.comment" readonly="readonly"></textarea>
  </div>
</div>
</template>

<script>
import { fb,db } from "../firebase/index";
import router from "../router";
export default {
  data(){
    return {
        comments: [],
        comment: {
          name:null,
          comment:null
        }
    }
  },
  firestore(){
      return {
        comments: db.collection('comment')
      }
  },
  methods:{
  resetFields () {
      this.testname = this.testcomment = '';
      event.target.reset();
  },
  addProduct(testname,testcomment){
    db.collection("comment").doc().set({
      name: testname,
      comment: testcomment
    })
   this.resetFields();
  }
  }
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_comment.css";
</style>
