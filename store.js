import * as storage from 'redux-storage';
//import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './reducers';

const rootReducer = storage.reducer(reducer);

import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
const engine = createEngine('BudgetMe');

//middleware is in charge of calling engine.save on the state after a dispatch is made
const middleware = storage.createMiddleware(engine);
 
// As everything is prepared, we can go ahead and combine all parts as usual 
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
export const store = createStoreWithMiddleware(rootReducer);

// At this stage the whole system is in place and every action will trigger 
// a save operation. 
// 
// BUT (!) an existing old state HAS NOT been restored yet! It's up to you to 
// decide when this should happen. Most of the times you can/should do this 
// right after the store object has been created. 
 
// To load the previous state we create a loader function with our prepared 
// engine. The result is a function that can be used on any store object you 
// have at hand :) 
const load = storage.createLoader(engine);

// Notice that our load function will return a promise that can also be used 
// to respond to the restore event. 
load(store)
    //.then((newState) => console.log('Loaded state:', newState))
    //.catch(() => console.log('Failed to load previous state'));



