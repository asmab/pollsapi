import { mount } from '@vue/test-utils'
import QuestionDetails from '@/components/QuestionDetails'

describe('QuestionDetails component', () => {
    let wrapper

    const mockPropsData = { 
        index: 1,
        question : {
            "question": "Favourite programming language?",
            "published_at": "2014-11-11T08:40:51.620Z",
            "url": "/questions/1",
            "choices": [{
                "choice": "Swift",
                "url": "/questions/1/choices/1",
                "votes": 2048
            }]
        }

    }

    beforeEach(() => {
        wrapper = mount(QuestionDetails, { mockPropsData } )
    })

    it('QuestionDetails component looks as expected', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})