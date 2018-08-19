import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import QuestionList from '@/components/QuestionsList '

describe('Shipping component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(QuestionList)
    })

    it('QuestionList component looks as expected', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})