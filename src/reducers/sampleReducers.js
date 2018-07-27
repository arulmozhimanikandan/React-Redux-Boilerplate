import { SAMPLE_ACTION } from '../actions/sampleActions'

const initialState = {
    welcomeText : ''
}

function sampleReducer( state = initialState, action) {

    switch (action.type) {
        case SAMPLE_ACTION: {
           return {
               ...state,
               welcomeText: action.text
           }
        }
        default:
            return state
    }

}

export default sampleReducer