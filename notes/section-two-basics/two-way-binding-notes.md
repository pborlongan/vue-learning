### Two-way data binding

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: ""
    };
  },
  //object
  //add methods
  watch: {
    name(value, oldvalue) { //value = name
      this.fullname = value + " " + this.lastName;
    }, //tells vue that if the name above (in data()) changes, run this method again.
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      }else {
        this.fullname = this.name + " " + value;
      }
    }
  }
  // used like variables, not like methods. call it like a prop.
  // prevents from running methods that have nothing changed in them. when the app rerenders.
  computed: {
    fullname() {
      if (this.name === "" && this.lasName=== "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
```

```html
<section id="events">
  <h2>Events in Action</h2>
  <button v-on:click="add(10)">Add 10</button>
  <button v-on:click="reduce(5)">Subtract 5</button>
  <p>Result: {{ counter }}</p>
  <!-- v-model is a shortcut for v-bind:value and v-on:input-->
  <input type="text" v-model="name" />
  <button v-on:click="resetInput()">Reset Input</button>
  <p>Your Name: {{ name }}</p>
</section>
```

### Methods

Use with event binding or data binding.

Data binding: Method is executed for every "re-render" cycle of the component.

Use for events or data that really needs to be reevaluated all the time.

### Computed

Use with data binding

Computed properties are only re-evaluated if one of their "used values" changed

Use for data that depends on other data

### Watch

Not used directly in template

Allows you to run any code in reaction to some changed data (send http request..  etc.)

Use for any non-data update you want to make

Used the least

### Shorthands

`v-on:click` can be `@click`
`v-bind:value` can be `:value`
