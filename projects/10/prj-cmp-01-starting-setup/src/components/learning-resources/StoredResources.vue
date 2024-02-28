<template>
  <ul>
    <learning-resource
      v-for="storedResource in resources"
      :key="storedResource.id"
      :id="storedResource.id"
      :title="storedResource.title"
      :description="storedResource.description"
      :link="storedResource.link"
    ></learning-resource>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

<script>
import LearningResource from './LearningResource.vue';
export default {
  inject: ['resources'],
  components: {
    LearningResource,
  },
};
</script>
