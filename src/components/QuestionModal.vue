<template>
    <div class="row">
        <div class=" col add-button-wrapper">

            <b-button class="add-btn" v-b-popover.hover="'Add a new question with multiple choices'" @click="showModal">
                + Create new question
            </b-button>

            <b-modal ref="myModalRef" hide-footer title="Create new question">

            <!-- Create new question form -->
            <div class="d-block text-center">
                <b-container fluid>
                    <b-row class="my-1">
                        <b-col sm="2"><label for="input-small">Question:</label></b-col>
                        <b-col sm="10">
                            <b-form-input id="input-small" v-model="questionText" size="sm" type="text" placeholder="Enter your question"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2"><label for="input-small">Choices:</label></b-col>
                        <b-col sm="10">
                            <input-tag placeholder="Enter your choices" :tags.sync="choicetags" limit="5"></input-tag> 
                        </b-col>
                    </b-row>
                    <b-row>
                        <!-- Alert danger -->
                        <b-alert class="alert" variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
                            {{ alertMessage}}
                        </b-alert>
                    </b-row>
                    <b-row class="my-1">
                        <b-btn class="mt-3 submit-btn" block @click="createNewQuestion(questionText,choicetags)">Save</b-btn>
                    </b-row>                        
                </b-container>
            </div>               
            </b-modal>

        </div>
    </div>
</template>

<script>

import QuestionsService from '@/services/QuestionsService'
const noDataErrorMsg = 'No Data to save.Please fill out the form !'
const creationFailedErrorMsg = 'Something went wrong.Please try again !'

export default {
    data () {
        return {
            questionText: '',
            choicetags: [],
            showDismissibleAlert: false,
            alertMessage : ''
        }
    },
    methods: {
        createNewQuestion(questionText,choicetags){

            if (questionText !== "" && choicetags.length > 0){

                //If questionText is not empty and 
                //at least one choice in choiceTags list
                // we create a new question
                QuestionsService.createNewQuestion(questionText,choicetags)
                .then((response) => {
                    console.log(response)
                    this.hideModal()
                })
                .catch(err => {
                    console.log(err)
                    this.showDismissibleAlert = true
                    this.alertMessage = creationFailedErrorMsg
                })

            } else {
                this.showDismissibleAlert = true
                this.alertMessage = noDataErrorMsg
            }      
        },
        showModal () {
            this.$refs.myModalRef.show()
        },
        hideModal(){
            this.$refs.myModalRef.hide()
            this.clearForm()
        },
        clearForm(){
            //Reset : clear input vals and dismiss the Alert
            this.choicetags = []
            this.questionText = ''
            this.alertMessage = ''
            this.showDismissibleAlert = false
        }
    }
}
</script>

<style lang="scss">

.add-button-wrapper {
    .add-btn{
        float: right;
        margin-bottom:15px;
        background-color:  #f39c12;
    }
    .submit-btn {
        background-color: #f39c12;
    }
}

.add-form {
    text-align: left;
    input{
        width:100%;
    }
}
ul {
    list-style-type: none;
    padding: 5px;
}

.alert {
    width: 100%;
    margin-top: 15px;
}
</style>