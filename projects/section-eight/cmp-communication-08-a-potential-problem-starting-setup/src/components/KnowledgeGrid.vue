<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  //inject works with provide, used like prop.
  //only works with parents/ancestor components.
  //use wisely. only use it when you have to weave through different components to pass data.
  inject: ['topics'],
};
</script>
