const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // result: 'Not there yet',
    };
  },
  watch: {
    counter() {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return (this.result = 'Not there yet');
      } else if (this.counter > 37) {
        return (this.result = 'Too much!');
      } else if (this.counter === 37) {
        return this.counter;
      }
    },
  },
  methods: {
    addCount(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount('#assignment');
