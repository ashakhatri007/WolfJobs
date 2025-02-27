import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import logger from 'redux-logger'

let store

export function configureStore() {
    store = createStore(
        reducer,
        // compose(
            applyMiddleware(thunk, logger),
            // window.__REDUX_DEVTOOLS_EXTENSION__ &&
                // window.__REDUX_DEVTOOLS_EXTENSION__()
        // )
    )

    return store
}
