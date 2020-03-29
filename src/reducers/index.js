import {combineReducers} from 'redux'
import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'

const allReducer=combineReducers({authedUser,tweets,users})

export default allReducer


