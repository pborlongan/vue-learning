### Vue Basics notes

This is on `app.js`

```javascript
const app = Vue.createApp({
  // data always returns an object.
  data() {
    return {
      // anything that is returned in this object here can be accessed/used on the main html file.
      courseGoal: "Finish the course and learn vue!",
      vueLink: "https://vuejs.org",
    };
  },
  // where your functions live
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA; //this is how you can access the data from above.
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal"); // apps are always mounted to the id because it's unique.
```

This is on `index.html`

```html
<!-- html document trimmed for easy reading -->
<section id="user-goal">
  <h2>My Course Goal</h2>
  <!-- called: interpolation, which is only works when the value is in between opening & closing html tags -->
  <p>{{ courseGoal }}</p>
  <!-- methods can be called inside an interpolation as well. don't forget the parenthesis -->
  <p>{{ outputGoal() }}</p>
  <!-- if you have a string that has html elements in it (from data), use the v-html directives to get it translated from string to an html element. NOT RECOMMENDED, use only when needed.-->
  <p v-html="outputGoal()"></p>
  <!-- when passing through an attribute, use a vue directive. for this case, v-bind. then just call the data through the bind -->
  <p>Learn More <a v-bind:href="vueLink">about Vue</a>.</p>
  <!-- this is how we access the vue data on the html file -->
</section>
```
