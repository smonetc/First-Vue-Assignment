const app = Vue.createApp({
   data(){
      return{
         myName:'Nika Cooper',
         myAge: 30,
         myAgeInFiveYears: 35,
         aImg: 'https://media-exp1.licdn.com/dms/image/C5103AQEr0c8WLr0XeA/profile-displayphoto-shrink_200_200/0/1517239274831?e=1622678400&v=beta&t=kJKirucwVR_8ohgIuCfz8EsF1HK_VwA91BxAoRw2LWE',
         myInput: 'I have two dogs and a fiance!'      
      }
   },
   methods: {
      faveNum(){
         const myNum = Math.random
         if (myNum < 0.5){
            return 0
         }
         else{
            return 1
         }
      }
   }
})

app.mount('#assignment')