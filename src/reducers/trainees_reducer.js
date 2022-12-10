function Trainee_Reducer(state={}, action){
    switch(action.type){
        case 'GET_TRAINEES_DETAILS':
            return{...state, isLoading:true}
        case 'TRAINEE_DETAILS_RECEIVED':
            return{...state, records:action.trainees, isLoading:false}
        default:
            return state;
    }
}

export default Trainee_Reducer;