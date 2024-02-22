import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
//import NewFriendMySolution from './components/NewFriendMySolution.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

// app.component('new-friend-form', NewFriendMySolution);
app.component('new-friend', NewFriend);
app.component('friend-contact', FriendContact);

app.mount('#app');
