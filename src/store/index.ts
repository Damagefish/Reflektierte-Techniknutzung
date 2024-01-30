import Vuex from 'vuex'


export default new Vuex.Store({

    state:{
        name: "", //gewählter Name des Users
        selectedTags: [], //Tags, die beim ersten Mal ausgewählt werden
        aspirationTags: [], //Tags, die für die Aspiration ausgewählt werden
        aspiration: "",
        istZustand: "", //Ist Zustand: Der aktuelle Stand des Nutzers
        zielInput: "",
        meilensteinInput: "",
        calendarFirstEnter: true,
        eventsArr:[],
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
        getEventsArr(state) {
            return state.eventsArr;
          },
        getIstZustand(state){
            const istZustand = state.istZustand;
            return istZustand;
        },
        getFirstTimeCalendar(state){
            const firstEnter = state.calendarFirstEnter;
            return firstEnter
        }
    },
    mutations:{
        changeName(state, newName){
            state.name = newName;
        }, 
        setSelectedTags(state, newTags){
            state.selectedTags = newTags;
        }, 
        setAspirationTags(state, newAspirationTags){
            state.aspirationTags = newAspirationTags
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
        setEventsArr(state, eventsArr) {
            state.eventsArr = eventsArr;
          },
        toggleFirstEnterCalendar(state){
            state.calendarFirstEnter = !state.calendarFirstEnter;
        }
    }


})