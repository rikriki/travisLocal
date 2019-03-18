
<template>
  <div id="app" class="foobar">
    <div id="header">
      <h1>{{ msg }}</h1>

      <ul>
        <li>
          <router-link to="/">Posts</router-link>
        </li>
        <li>
          <router-link to="/Users">Users</router-link>
        </li>
        <li>
          <router-link to="/Lists">Lists</router-link>
        </li>
      </ul>
    </div>
   
     <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    let foo = "yes?";
    return {
      msg: "Testing App",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  /* color: #ff0000 */
  
}
#header{
  margin-top: 60px;
  text-align: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
