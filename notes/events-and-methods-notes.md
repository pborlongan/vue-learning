### Events and Methods Notes

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addCounter() {
      this.counter = this.counter + 1;
    },
    subtractCounter() {
      this.counter = this.counter - 1;
    },
    //an example where a parameter is passed
    addCounter(num) {
      this.counter = this.counter + num;
    },
    subtractCounter(num) {
      this.counter = this.counter - num;
    },
    // event is always passed trhrough v-on? i thinl. im not sure
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
```

```html
<section id="events">
  <h2>Events in Action</h2>
  <!-- valid. and it works! not recommended though. should go inside methods.-->
  <button v-on:click="counter++">Add</button>
  <!-- you can just point to the function like this -->
  <button v-on:click="addCounter">Add</button>
  <!-- or call it like this. both are correct. -->
  <button v-on:click="subtractCounter()">Remove</button>
  <p>Result: {{ counter }}</p>

  <!-- v-on:input is good for listening to every keystroke a user enters -->
  <input type="text" v-on:input="setName" />
  <!-- when you have to send a parameter, but still want to access the event-->
  <input type="text" v-on:input="setName($event, 'Simpson')" />
  <p>Your Name : {{ name }}</p>
</section>
```
