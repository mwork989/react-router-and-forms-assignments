import { put , takeLatest, all } from 'redux-saga/effects';

// worker saga 
function* getCourses(){
    const records = yield fetch('http://localhost:6700/courses')
    .then(response => response.json());
    yield put({type:"COURSES_DETAILS_RECEIVED", courses : records, error: false})
}

function* enrollToCourses(action){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...action.payload,enrolledDate: new Date()})
    };
    yield fetch('http://localhost:6700/trainees', requestOptions)
    .then(response => response.json());
    yield put({type:"COURSE_ENROLLED",  error: false})
}


function* getTrainees(){
    const records = yield fetch('http://localhost:6700/trainees')
    .then(response => response.json());
    yield put({type:"TRAINEE_DETAILS_RECEIVED", trainees : records, error: false})
}



// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_COURSES_DETAILS', getCourses)
    yield takeLatest('GET_TRAINEES_DETAILS', getTrainees)
    yield takeLatest('ENROLL_FOR_COURSE', enrollToCourses)
}

// root saga
export default function* rootSaga(){
    yield all([actionWatcher()])
}

