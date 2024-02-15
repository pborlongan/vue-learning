const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            result: "Not there yet",
        }
    },
    computed: {
        result(){

        }
    },
    methods: {
        addCount(num) {
            this.counter = this.counter + num;
        },
    }
})

app.mount("#assignment");
