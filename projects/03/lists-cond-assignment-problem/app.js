const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listVisible: false,
    };
  },
  computed: {
    // good case to test your knowledge on computed properties.
    // if listVisible changes, this method will run.
    buttonCaption() {
      return this.listVisible ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = ' ';
      if (this.tasks.length > 0) {
        this.listVisible = true;
      }
    },
    showHideList(event) {
      this.listVisible = !this.listVisible;
    },
  },
});

app.mount('#assignment');
