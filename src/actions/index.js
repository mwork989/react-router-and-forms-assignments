export const getCourses =() => ({
    type: 'GET_COURSES_DETAILS',
})

export const getTrainees =() => ({
    type: 'GET_TRAINEES_DETAILS',
})


export const enrollToCourses =(enrollingData) => ({
    type: 'ENROLL_FOR_COURSE',
    payload: enrollingData
})