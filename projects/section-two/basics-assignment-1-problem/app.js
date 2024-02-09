const app = Vue.createApp({
  data() {
    return {
      name: "Homer Simpson",
      age: 42,
      imgURL:
        "https://images.unsplash.com/photo-1682685796852-aa311b46f50d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.floor(Math.random() * 11);
    },
  },
});

app.mount("#assignment");
