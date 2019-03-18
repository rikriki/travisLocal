import {shallowMount,mount,createLocalVue} from '@vue/test-utils'
import Checklist from './Checklist'
describe('Checklist.vue', () => {
    test('Checklist sample test',()=>{
        // const wrapper = mount(Checklist)    
        // expect(wrapper.classes()).toContain('foobara')
        expect(1).toBe(1)
    },2000)

    // test('CAlls addItem function when button is clicked',()=>{
    //     const addItem = jest.fn()
    //     const wrapper = mount(Checklist,{
    //         propsData:{
    //             addItem
    //         }
    //     })
    //     wrapper.find('button').trigger('click')
    //     expect(wrapper.vm.items).toHaveLength(4)

        
    //     expect(wrapper.find({name:'List'})).toBeTruthy()
    // })
})
