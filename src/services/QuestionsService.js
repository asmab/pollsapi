import Api from '@/services/Api'

export default {

    getAllQuestions() {
        return Api().get('/questions')
    },
    voteOnAChoice(choiceUrl){

        //https://polls.apiblueprint.org/questions/question_id/choices/choice_id
        return Api().post(choiceUrl)
    }
}