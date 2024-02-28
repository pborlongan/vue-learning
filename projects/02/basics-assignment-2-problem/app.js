const app = Vue.createApp({
  data() {
    return {
      outputKeydown: "",
      outputEnter: "",
    };
  },
  methods: {
    showAlert() {
      window.alert("Alert Message");
    },
    showOutputOnKeydown(event) {
      this.outputKeydown = event.target.value;
    },
    showOutputOnEnter(event) {
      this.outputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
