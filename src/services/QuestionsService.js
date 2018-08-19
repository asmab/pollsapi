import Api from '@/services/Api'

export default {

    getAllQuestions() {
        return Api().get('/questions')
    }
}