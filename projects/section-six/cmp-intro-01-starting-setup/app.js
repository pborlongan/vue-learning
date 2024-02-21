const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'julie',
          name: 'julie jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
      detailsAreVisible: false,
    };
  },
});

app.component('friend-contact', {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">
            {{ detailsAreVisibile ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email}}</li>
        </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'manuel lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
