const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: ""
    };
  },
  watch: {
    // name(value, oldvalue) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }else {
    //     this.fullname = value + " " + "Simpson";
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }else {
    //     this.fullname = this.name + " " + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
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
