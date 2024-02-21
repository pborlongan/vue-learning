### Two-way data binding

```javascript
const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
```

```html
<section id="user-goals">
  <h2>My course goals</h2>
  <input type="text" />
  <button>Add Goal</button>
  <!-- v-if pass a condition, we can acess the methods and data from the js -->

  <p v-if="goals.length === 0">
    No goals have been added yet - please start adding some!
  </p>
  <!--  usind v-for to display array: -->
  <ul v-else>
    <!-- used to display items in array -->
    <li v-for="(goal, index) in goals" @click="removeGoal(index)">
      {{ goal }}
      <input type="text" @click.stop />
      <!-- click.stop keeps the click event on the input and doesn't go all the way to the click even on the list item-->
    </li>
  </ul>
  <!--  usind v-for to display objects: -->
  <ul>
    <li v-for="(value, key, index) in {name: 'Homer', age: 42}">
      {{ key }}: {{ value }} - {{ index }}
    </li>
  </ul>
  <!--  usind v-for to display a number increment: -->
  <ul>
    <li v-for="num in 10">{{ num }}</li>
  </ul>
</section>
```

## `v-if` directive

- You can combine conditions with `and` or `or`.
- You can point to a computed property, or a data property, or execute a method as long as it returns returns a truthy or falsy value.
- removes elements from the DOM. see v-show below for special cases

## `v-else` directive

- has to be declared right after the element with the `v-if`

## `v-else-if` directive

- for another condition

## `v-show` directive

- hides element through `display: none` and inline styling.
- use this when visibility changes a lot. so that the DOM is not always changing.

## `v-for` directive

- used for dealing with repeated items
- `v-for = "item in items"`
- you can get the index of the loop as well. `v-for = "(item, index) in items"` the second parameter will return the index.
- objects can be looped through as well. same as arrays, value then key, then index if needed. `v-for="(value, key, index) in {name: 'Homer', age: 42}"`

## `:key`

- used to uniquely determine items for vue.
- has to be very unique.
