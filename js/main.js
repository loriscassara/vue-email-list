/*************** 
    CODE VUE MAIL API
***************/

const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
            toggle: true
        }
        
    },
    methods: {
        genEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    if(resp.data.success) {
                        this.emails.push(resp.data.response);
                    }
                })};
            },
        loading(){
            this.toggle = !this.toggle
        }
    },
    mounted() {

        
    }
}).mount('#app')