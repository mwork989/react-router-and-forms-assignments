function Course_Reducer(state={isRegsitrationSuccessFull:false}, action){
    switch(action.type){
        case 'GET_COURSES_DETAILS':
            return{...state, isLoading:true}
        case 'COURSES_DETAILS_RECEIVED':
            return{...state, records:action.courses, isLoading:false, error:action.error }
        case 'ENROLL_FOR_COURSE':
            return{...state, isRegsitrationSuccessFull:false}
        case 'COURSE_ENROLLED':
            return{...state, isRegsitrationSuccessFull:true, error:action.error }
        default:
            return state;
    }
} 

export default Course_Reducer;