import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatcher = typeof store.dispatch