//https://www.youtube.com/watch?v=LxXsGNXsMo8&list=PLbyjNT9TOXIAS7YYpZvbWoKfjjhEMWDGT
//https://www.youtube.com/watch?v=dV_5BLKNCRY
//https://jestjs.io/docs/en/expect
//https://vue-test-utils.vuejs.org/
//https://medium.com/3yourmind/testing-vue-components-a-cheat-sheet-299b3b8be88d
// https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_text_value.js
import {shallowMount,createLocalVue} from '@vue/test-utils'
import App from '../App'
import VueRouter from 'vue-router'
 const vue = createLocalVue()
describe('App.vue', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const app = shallowMount(App,{localVue})
    
    test('App sample test',()=>{
       expect(app.classes()).toContain('foobar')
    },2000)
    
   
    test('renders correctly',()=>{
        
        expect('<div>Foo</div>').toMatchSnapshot()
    },2000)
})

