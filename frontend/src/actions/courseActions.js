import axios from "axios";
import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL
} from "../constants/courseConstants";


export const listCourses = () => async (dispatch) => {
    try {
        
        dispatch({ type: COURSE_LIST_REQUEST })

        const { data } = await axios.get('/api/courses')

        dispatch({
            type: COURSE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COURSE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}