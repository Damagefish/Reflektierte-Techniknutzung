import Vuex from 'vuex'


export default new Vuex.Store({

    state:{
        name: "",
        selectedTags: [],
        aspiration: "",
        istZustand: "",
        zielInput: "",
        meilensteinInput: "",
    },
    getters:{
        getName(state){
            const userName = state.name;
            return userName;
        }, 
        getSelectedTags(state){
            const selectedTags = state.selectedTags;
            return selectedTags;
        }, 
        getAspiration(state){
            const aspiration = state.aspiration;
            return aspiration
        },
        getZielInput(state){
            const zielInput = state.zielInput;
            return zielInput
        },
        getMeilensteinInput(state){
            const meilensteinInput = state.meilensteinInput;
            return meilensteinInput
        },
        getIstZustand(state){
            const istZustand = state.istZustand;
            return istZustand;
        }
    },
    mutations:{
        changeName(state, newName){
            state.name = newName;
        }, 
        setSelectedTags(state, newTags){
            state.selectedTags = newTags;
        }, 
        setAspiration(state, newAspiration){
            state.aspiration = newAspiration;
        },
        setIstZustand(state, newIstZustand){
            state.istZustand = newIstZustand;
        },

        setMeilensteinInput(state, newMeilensteinInput) {
            state.meilensteinInput = newMeilensteinInput;
        },
        setZielInput(state, newZielInput) {
            state.zielInput = newZielInput;
        },
    }


})