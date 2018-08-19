<template>
    <div class="container2">
        <div class="flex-container" >
            <div v-for="(question,index) in questionsList">
                <div class="top-section"> {{question.question}}</div>
                <hr>
                <div class="bottom-section">
                    <span class="question-details">
                        published at :{{dateFormatter(question.published_at)}}<br>
                        {{question.choices.length}} choices
                    </span>
                    <span class="button-wrapper">
                        <button type="submit">Vote</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import QuestionsService from '@/services/QuestionsService'

export default {
  components: {  },
  data () {
    return {
        questionsList : [],
        show: false
    }
  },
  created() {

      QuestionsService.getAllQuestions()
      .then((response) => this.questionsList = response.data)
      .catch(err => console.log('error :', err))
  },
  methods: {
      dateFormatter(published_date){
          var convertedDate = new Date(published_date)
          return convertedDate.toLocaleDateString().toString()
      },
        getChoicePercentage(choices, choice){
          //calc sum of choices
            var totalVotes = 0
            var choicePercentage = 0

            choices.map(choiceObj => totalVotes+=choiceObj.votes)
      
            choicePercentage = (choice.votes * (100/ totalVotes)).toFixed(2)

            console.log('totalVotes ', totalVotes)
            console.log('choicePercentage ', choicePercentage, 'choice : ',choice.choice )
     
            return choicePercentage
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .container {

  
// }
// .box {
//     background-color: red;
//     margin:10px;
//     width:30%;
// }



hr { margin: 0px; }
.date { float:left; }
.choices { float: right; }

// .centred-wrapper {
//     margin-right: 20%;
//     margin-left:20%;
//     margin-top: 5%;
//     margin-bottom: 5%;

//     //border-style: dotted;
//     border-radius: 3px;
// }


// table {
//     text-align: left;
//     td:nth-child(1){
//         width: 50%;
//     }
//     td:nth-child(2){
//         width: 30%;
//     }
//     td:nth-child(3){
//         width: 20%;
//     }
// }


// @media (max-width: 400px) {
//   .flex-grid,
//   .flex-grid-thirds {
//     display: block;
//   }
//   .flex-grid .col,
//   .flex-grid-thirds .col {
//     width: 100%;
//     margin: 0 0 10px 0;
//   }
// }


.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
}

.flex-container > div {
  background-color: #154360;
  width: 30%;
  margin: 10px;
  height: 100px;
}

.top-section {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
    color:  #f34912 ;
    font-weight: bold;
    text-align: left;
}

.bottom-section {
    margin-top: 15px;
}


.question-details{
    text-align: left;
    float:left;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    color: white;
}
.button-wrapper {
    margin-left: 10px;
    margin-right: 10px;
    float:right;
}
</style>
