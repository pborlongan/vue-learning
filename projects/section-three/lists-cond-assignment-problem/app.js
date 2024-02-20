const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listHidden: false,
      buttonText: 'Hide List',
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = ' ';
      if (this.tasks.length > 0) {
        this.listHidden = true;
      }
    },
    showHideList(event) {
      this.listHidden = !this.listHidden;
      if (this.listHidden == true) {
        this.buttonText = 'Hide List';
      } else {
        this.buttonText = 'Show List';
      }
    },
  },
});

app.mount('#assignment');
