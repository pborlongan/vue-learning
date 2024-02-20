const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      pargOneHidden: false,
      inlineBGColour: '',
    };
  },
  computed: {
    paragraphOneStyles() {
      return this.inputClass;
    },
  },
  methods: {
    classInput(event) {
      this.inputClass = event.target.value; //when getting input, use value
    },
    visibilityClass() {
      this.pargOneHidden = !this.pargOneHidden;
    },
    inlineBG(event) {
      this.inlineBGColour = event.target.value;
    },
  },
});

app.mount('#assignment');
