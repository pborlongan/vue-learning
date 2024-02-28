<template>
  <div>
    <header v-if="$slots.header">
      <!-- check if the user sends a header info -->
      <slot name="header"></slot
      ><!-- this is where your wrapped content will go. -->
    </header>
    <slot></slot>
    <!-- could be used as a template -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
