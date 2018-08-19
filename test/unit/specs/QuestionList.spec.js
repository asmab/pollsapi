import { mount } from '@vue/test-utils'
import QuestionList from '@/components/QuestionsList '

describe('QuestionList component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(QuestionList)
    })

    it('QuestionList component looks as expected', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})