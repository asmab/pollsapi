<template>
    <div class="centred-wrapper">

        <!-- Add new question : Modal form-->
        <question-modal />

        <div role="tablist">
            <b-card no-body v-for="(question,index) in questionsList" class="mb-1" v-bind:key="index">
                <b-card-header header-tag="header" class="header" role="tab">

                    <!-- QuestionDetails -->
                    <question-details  :index="index" :question="question"/>

                </b-card-header>


                <b-collapse :id="'num-'+index" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <p class="card-text">
                        
                        <table>
                            <tr v-for="choice in question.choices">
                                <td> {{choice.choice}}</td>
                                <td>{{choice.votes}} votes</td>
                                <td>{{getChoicePercentage(question.choices, choice)}} %</td>
                                <td>
                                    <input 
                                    type="radio" 
                                    :id="choice" 
                                    :value="choice" 
                                    v-model="checkedChoice"/>
                                </td>
                            </tr>
                        </table>
                    </p>
                    <p class="card-text btn-wrapper">
                        <b-button size="50" variant="success" @click="voteOnAChoice(checkedChoice)">Submit</b-button>
                    </p>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>


import QuestionsService from '@/services/QuestionsService'

import QuestionDetails from '@/components/QuestionDetails'
import QuestionModal from '@/components/QuestionModal'

export default {
  components: { QuestionDetails, QuestionModal },
  data () {
    return {
        questionsList : [],
        checkedChoice: {},
        show: false
    }
  },
  created() {
      this.getQuestions()
  },
  methods: {
      getQuestions(){
            QuestionsService.getAllQuestions()
            .then((response) => this.questionsList = response.data)
            .catch(err => console.log('error :', err))
            return this.questionsList
      },
      dateFormatter(published_date){
          var convertedDate = new Date(published_date)
          return convertedDate.toLocaleDateString().toString()
      },
        getChoicePercentage(choices, choice){
          //calc sum of choices
            var totalVotes = 0
            var choicePercentage = 0

            choices.map(choiceObj => totalVotes+=choiceObj.votes)      
            choicePercentage = (totalVotes > 0) ? (choice.votes * (100/ totalVotes)).toFixed() : 0   
            return choicePercentage
        },
        voteOnAChoice(checkedChoice){
            QuestionsService.voteOnAChoice(checkedChoice.url)
            .then(response => this.getQuestions())
            .catch(error => console.log(error))
        }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$orange-color: #f39c12 ;


.header {
    height:auto;
    background-color: #154360;
    
    .header-content {
        text-align: left;
         color: $orange-color;
         font-size: 20px;
         font-weight: bold;
    }
}

.centred-wrapper {
    margin-right: 25%;
    margin-left:25%;
    margin-top: 5%;
    margin-bottom: 5%;

    //border-style: dotted;
    border-radius: 3px;
}
.btn-wrapper {
    float:right;
}

table {
    text-align: left;
    td:nth-child(1){
        width: 50%;
    }
    td:nth-child(2){
        width: 30%;
    }
    td:nth-child(3){
        width: 20%;
    }
}
</style>
