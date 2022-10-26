import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {},
    mutations: {
        "SOCKET_  connection"() {
            console.log("work")
        }
    },
    actions: {
        "SOCKET_ Connect"() {
            console.log("owrk 2")
        }
    }
})