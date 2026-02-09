import {configureStore,combineReducers} from '@reduxjs/toolkit'
import projectreducer from './slices/projectslices'

const rootreducer=combineReducers({
    projectreducer: projectreducer

})
const Store=configureStore({
    reducer:rootreducer
})
export default Store