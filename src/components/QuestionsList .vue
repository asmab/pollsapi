<template>

  <div class="container">

    <div class="centred-wrapper">
        <div role="tablist">
            <b-card no-body v-for="(question,index) in questionsList" class="mb-1" v-bind:key="index">
                <b-card-header header-tag="header" class="header" role="tab">
                    <div class="header-content">
                        <div class="row">
                            <div class="col col-1"> {{index+1}} </div>
                            <div class="col col-10"> 
                                {{question.question}}<hr>
                                <div class="question-details">
                                    <span class="date"> published at :{{dateFormatter(question.published_at)}}</span>
                                    <span class="choices"> {{question.choices.length}} choices </span>
                                </div>
                            </div>
           
                            <div class="col col-1">
                                <button 
                                class="vote-btn" 
                                block href="#" 
                                v-b-toggle="'num-'+index"
                                variant="primary"></button>
                            </div>
                        </div>
                    </div>
                </b-card-header>


                <b-collapse :id="'num-'+index" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <p class="card-text">
                        
                        <table>
                            <tr v-for="choice in question.choices">
                                <td> {{choice.choice}}</td>
                                <td>{{choice.votes}} votes</td>
                                <td>{{getChoicePercentage(question.choices, choice)}} %</td>
                                <td><input type="checkbox"/></td>
                            </tr>
                        </table>
                    </p>
                    <p class="card-text btn-wrapper">
                        <b-button size="50" variant="success">Submit</b-button>
                    </p>
                    </b-card-body>
                </b-collapse>
            </b-card>
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
.container {
  
}
hr { margin: 0px; }
.date { float:left; }
.choices { float: right; }

.question-details {
    margin-top:5px;
}
.header {
    height:auto;
    background-color: #154360;
    
    .header-content {
        text-align: left;
         color: #f39c12 ;
         font-size: 20px;
         font-weight: bold;
    }

    span{
        color: white;
        font-size: 10px;
        margin:0px;
        padding:0px;
        list-style-type: none;
    }
}

.vote-btn{
    width: 20px;
    height: 20px;
    float:right;
}
.centred-wrapper {
    margin-right: 20%;
    margin-left:20%;
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
