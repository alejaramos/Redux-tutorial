const redux = require("redux")
const createStore = redux.createStore

//create an action 

const buy_cake= "buy_cake"



function buyCake(){
    return {
        type: buy_cake,
        info:"first redux action"
    }
}


const initialstate ={
    numOfCakes: 10
}

const reducer =(state=initialstate, action)=>{
    switch(action.type){
        case buy_cake: return {
            ... state,
            numOfCakes:state.numOfCakes -1 
        }
        default: return state
    }

}

const store = createStore(reducer)
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(()=> console.log("update state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()