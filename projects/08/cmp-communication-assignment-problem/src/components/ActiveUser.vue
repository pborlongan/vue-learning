<template>
  <div className="active">
    <h2>UserName: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
    <p>{{ active ? 'Active' : 'Inactive' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    age: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {},
};
</script>
