<template>
  <p>Full Name</p>
  <input placeholder="full name" v-model="friend.name" />
  <p>Phone Number</p>
  <input placeholder="phone number" v-model="friend.phone" />
  <p>Email</p>
  <input placeholder="email" v-model="friend.email" />
  <button @click="addFriend">Add Friend</button>
</template>
<script>
export default {
  // was getting an error when i didn't define this emit here. don't forget when doing emits.
  emits: ['add-friend'],
  data() {
    return {
      friend: {
        id: '',
        name: '',
        phone: '',
        email: '',
        isFavorite: false,
      },
    };
  },
  methods: {
    addFriend() {
      // i wouldn't use the first name as id. it's not unique. ids should be unique
      const splitName = this.friend.name.split(' '),
        friendID = splitName[0];
      this.friend.id = friendID;
      this.$emit('add-friend', this.friend);
    },
  },
};
</script>
