const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listVisible: false,
    };
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
