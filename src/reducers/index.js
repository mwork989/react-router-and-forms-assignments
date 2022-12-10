import { combineReducers } from 'redux';
import courses from './courses_reducer';
import trainees from './trainees_reducer';
const rootReducer = combineReducers({
    courses,
    trainees
});

export default rootReducer;