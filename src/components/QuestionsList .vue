<template>
    <div v-if="questionsList.length > 0" class="centred-wrapper">

        <!-- Add new question : Modal form-->
        <question-modal/>

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
                        <p class="card-text">
                            <b-button size="50" variant="success" @click="voteOnAChoice(checkedChoice)">Submit</b-button>
                        </p>
                        <p>                                            
                            <!--Alert : show an error message when clicking save button before checking a choice-->
                            <b-alert :show="showAlert" dismissible variant="danger">{{ alertMessage}}</b-alert>
                        </p>
                    </b-card-body>
                </b-collapse>
                
            </b-card>
        </div>
    </div>
    <div v-else>
        <h1>Fetching data .....</h1>
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
            show: false,
            showAlert: false,
            alertMessage: ''
        }
    },
    created() {
      this.getQuestions()
    },
    watch: {
        checkedChoice(val){
            if(val.url === undefined){
                this.showAlert = true
            } else {
                this.showAlert = false
            }
        }
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
            var totalVotes = 0
            var choicePercentage = 0

            //calc sum of choices
            choices.map(choiceObj => totalVotes+=choiceObj.votes)

            choicePercentage = (totalVotes > 0) ? (choice.votes * (100/ totalVotes)).toFixed() : 0   
            return choicePercentage
        },
        voteOnAChoice(checkedChoice){
            // API call from QuestionService : to vote on a choice
            // if the choice Url is defined

            if (checkedChoice.url !== undefined ) {
            
                QuestionsService.voteOnAChoice(checkedChoice.url)
                .then(response => {
                    this.getQuestions()
                    //dismiss the Alert
                    this.showAlert = false
                })
                .catch(error => {
                    console.log(error)
                    this.showAlert = true
                    this.alertMessage = "Something went wrong.Please try again !"
                })
            } else {
                // if the Url is not defined we show the alert with an error message
                this.showAlert = true
                this.alertMessage = "Make sure to check one option before submitting . "
            }
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
    border-radius: 3px;
}
.card-text {
    button{
        margin-left: 330px;
    }    
}

table {
    text-align: left;
    margin-right:50px;
    margin-left:50px;

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


/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
    .card-text {
        button{
            margin-left: 320px;
        }    
    }  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
    .header-content{
      font-size:12px;
        .col-10 {
            max-width: 73.333333%;
        }
    }

    table{
        margin: 0px;
        font-size: 8px;
    }

    .choices {
        float:left;
    }

    .centred-wrapper {
        margin: 0px;
    }

    .card-text {
        button{
            margin-left: 170px;
        }    
    }


}
</style>
