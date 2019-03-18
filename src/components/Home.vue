<template>
  <div id="Home">
    <h2>{{title}}</h2>
    <input type="text" v-model="postTitle" placeholder="title">
    <input type="text" v-model="postBody" placeholder="body">
    
    <b-button variant="danger" @click="createPost()">Submit</b-button>
    <b-button variant="danger" @click="createPost()">Submit</b-button>
     <!-- <b-alert show variant='danger'>Sample Alert</b-alert> -->
     
    <div v-for="post in blogPosts" class="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex';


export default {
  name: "home",
  data() {
    return {
      title:"Posts",
      postTitle:null,
      postBody:null
    };
  },
  computed: {
    blogPosts() {
      return this.$store.state.blog.blogPosts;
    }
  },
  created() {
    this.$store.dispatch('blog/getBlogPosts')
  },
  methods:{
    
    createPost(){
       this.$store.dispatch('blog/setBlogPosts',{title:this.postTitle,body:this.postBody})
    }
  }
};
</script>

<style>
.post {
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
  text-align: left;
  
}
#home{
  
}
</style>