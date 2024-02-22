### Components Notes

#### Binding all Props

Taken from the adv-props.pdf file.

There is another built-in feature/ behavior related to props.
If you have this component:

**UserData.vue**

```html
<template>
  <h2>{{ firstname }} {{ lastname }}</h2>
</template>

<script>
  export default {
    props: ['firstname', 'lastname'],
  };
</script>
```

You could use it like this:

```html
<template>
  <user-data :firstname="person.firstname" :lastname="person.lastname">
  </user-data>
</template>
<script>
  export default {
    data() {
      return {
        person: { firstname: 'Max', lastname: 'Schwarz' },
      };
    },
  };
</script>
```

But if you have an object which holds the props you want to set as properties, you can also shorten the code a bit:

```html
<template>
  <user-data v-bind="person"></user-data>
</template>
<script>
  export default {
    data() {
      return {
        person: { firstname: 'Max', lastname: 'Schwarz' },
      };
    },
  };
</script>
```
