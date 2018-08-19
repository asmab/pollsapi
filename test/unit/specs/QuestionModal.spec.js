import { mount } from '@vue/test-utils'
import QuestionModal from '@/components/QuestionModal'

describe('QuestionModal component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(QuestionModal)
    })

    it('QuestionModal component looks as expected', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})