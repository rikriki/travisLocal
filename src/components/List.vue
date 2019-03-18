
<template>
  <div id="list" class="foobar">
    <button v-on:click="close()"> Close </button>
    <ul>
      <li v-for="item in items" v-on:click="setTitle(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props:
    {
      items: {
        required: true,
        type: Array
      },
      closethis:{
          type:Function
      }
    },
  methods: {
    setTitle(title) {
      this.$emit("changeTitle", "From children " + title);
    },
    addNumber(a, b) {
      return a + b;
    },
    close(){
        this.closethis()
    }
  }
};
</script>
<style scoped>
li {
  display: block;
  color: red;
}
</style>