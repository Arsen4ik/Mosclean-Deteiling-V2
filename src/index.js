const app = Vue.createApp({
    data(){
        return {
            date: new Date().getFullYear(),
            // Option: 1,
            // ifOpenedMenu: false,
            // messages: [],
            // enteredMessage: ''
        }
    },
    // computed: {
    //     chosenOption(){
    //         if(this.Option == 1){
    //             return {
    //                 "grid-template-columns": "2fr repeat(3, 1fr)"
    //             }
    //         }
    //         else if(this.Option == 2){
    //             return {
    //                 "grid-template-columns": "1fr 2fr 1fr 1fr"
    //             }
    //         }
    //         if(this.Option == 3){
    //             return {
    //                 "grid-template-columns": "repeat(2, 1fr) 2fr 1fr"
    //             }
    //         }
    //         if(this.Option == 4){
    //             return {
    //                 "grid-template-columns": "repeat(3, 1fr) 2fr"
    //             }
    //         }
    //     },
    //     chosenOption1(){
    //         if(this.Option == 1){
    //             return {
    //                 "background-color": "rgb(63, 63, 63)",
    //                 // height: "150px"
    //             }
    //         }
    //     },
    //     chosenOption1Color(){
    //         if(this.Option == 1){
    //             return {
    //                 color: "whitesmoke"
    //             }
    //         }
    //     },
    //     chosenOption2(){
    //         if(this.Option == 2){
    //             return {
    //                 "background-color": "rgb(63, 63, 63)",
    //                 // height: "150px"
    //             }
    //         }
    //     },
    //     chosenOption2Color(){
    //         if(this.Option == 2){
    //             return {
    //                 color: "whitesmoke"
    //             }
    //         }
    //     },
    //     chosenOption3(){
    //         if(this.Option == 3){
    //             return {
    //                 "background-color": "rgb(63, 63, 63)",
    //                 // height: "150px"
    //             }
    //         }
    //     },
    //     chosenOption3Color(){
    //         if(this.Option == 3){
    //             return {
    //                 color: "whitesmoke"
    //             }
    //         }
    //     },
    //     chosenOption4(){
    //         if(this.Option == 4){
    //             return {
    //                 "background-color": "rgb(63, 63, 63)",
    //                 // height: "150px"
    //             }
    //         }
    //     },
    //     chosenOption4Color(){
    //         if(this.Option == 4){
    //             return {
    //                 color: "whitesmoke"
    //             }
    //         }
    //     },
    // },
    // methods: {
    //     chooseOption(n){
    //         this.Option = n
    //     },
    //     openMenu(){
    //         this.ifOpenedMenu = !this.ifOpenedMenu
    //     },
    //     // addingMessage(){
    //     //     // if(this.enteredMessage.length == 2){
    //     //     //     this.enteredMessage.pop()
    //     //     // }
    //     //     // this.enteredMessage.push(this.$refs.enteredMessage.value)
    //     //     // let name = process.argv[2]
    //     //     // console.log(name)
    //     //     let MD = []
    //     //     MD.push(this.enteredMessage, `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`)
    //     //     this.messages.push(MD)

    //     // }
    // }
})
app.mount('body')