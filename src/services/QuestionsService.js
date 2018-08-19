import Api from '@/services/Api'

export default {

    getAllQuestions() {
        return Api().get('/questions')
    },
    voteOnAChoice(choiceUrl){
        // choiceUrl : '/questions/question_id/choices/choice_id'
        return Api().post(choiceUrl)
    },
    createNewQuestion(questionText,choiceList){
        var data = {
            'question': questionText,
            'choices': choiceList
        }
        return Api().post('/questions', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}