<template>
  <form @submit.prevent="addUserToList">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age:</label>
      <input type="text" v-model="age" />
    </div>
    <div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-user'],
  data() {
    return {
      //passing objects when the array is empty in the parent component is not ideal.
      id: '',
      name: '',
      age: '',
      active: true,
    };
  },
  methods: {
    addUserToList() {
      this.id = new Date().toISOString;
      this.$emit('add-user', this.id, this.name, this.age, this.active);
    },
  },
};
</script>
