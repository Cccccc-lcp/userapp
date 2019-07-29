import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    txt:'',
    details:[]
}

const mutations={
    ADD_SEARCH(state,data){
        state.txt=data;
        // console.log(state.txt)
    },
    ADD_DETAILS(state,data){
        state.details=[data]
    }
}

const store = new Vuex.Store({
    state,
    mutations
});
 
export default store;