<template>
  <div id="checklist" class="foobara">
    <h2>{{title}}</h2>
    <button @click="addItem" class="AddItem">Add item</button>
    <button @click="deleteItem">Delete item</button>
    <list-component :items="items" @changeTitle="changeTitle" :closethis="closeBox"/>
  </div>
</template>

<script>
import ListComponent from "./List.vue";
export default {
  name: "checklist",
  data() {
    return {
      title: "Checklist",
      items: ["Item 1", "Item 2", "Item 3"]
    };
  },
  components: {
    ListComponent
  },
  methods: {
    addItem() {
      this.items.push("Item " + Date.now().toString(36));
    },
    deleteItem() {
      this.items.splice(0,1);
    },
    changeTitle(title){
        this.title = title
    },
    closeBox(){
        console.log('close box')
    }
  }
};
</script>
