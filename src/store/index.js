import { createStore }  from 'vuex'


export default createStore ({
    state: {
        counter: 10,
        sessionid: ""
    },
    getters: {
        getBasePoint: (state) => {
            return state.sessionid;
        },
        time2(state) {
            return state.counter * 2;
        }
    },
    mutations: {
        setCounter(state, value) {
            state.counter = value;
        },

        addSessionID(state, payload) {
            state.sessionid = payload;
            localStorage.setItem("login_id", payload)
        },
    }
}); 