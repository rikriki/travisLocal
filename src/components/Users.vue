<template>
  <b-container id="Home">
    <b-row>
      <b-col><h2>{{title}}</h2></b-col>
      <b-col md="auto"><b-button variant="danger" href="/users/create">Create User</b-button></b-col>
    </b-row>
    
    
    
    <div v-for="user in users" >
      <b-card v-bind:title="user.name" v-bind:sub-title="'22 Business block, Queenston street.'">
        <b-card-text>
          Some quick example text to build on the
          <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <a v-bind:href='"mailto:"+user.email' class="card-link">Email</a>
        <a v-bind:href='"tel:"+user.phone' class="card-link">Phone</a>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "user",
  data() {
    return {
      title: "Users"
    };
  },
  computed: {
    users() {
      return this.$store.state.user.users;
    }
  },
  created() {
    this.$store.dispatch("user/getUsers");
  }
};
</script>

<style >
.user {
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
  text-align: left;
}
</style>
