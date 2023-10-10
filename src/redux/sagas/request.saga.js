import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

// This is a worker saga; will be fired upon 
// 'FETCH_REQUESTS' 
// 'ADD_REQUEST'
// 'FETCH_REQUEST_ITEM' actions

function* fetchRequests() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // gets all requests to be displayed in activity feed
        const response = yield axios.get('api/request', config);
        yield put({ type: 'SET_REQUESTS', payload: response.data });
    } catch (error) {
        console.log('fetchRequest get request failed', error)
    }

}

function* addRequest(action) {
    try {
        const newRequest = yield axios.post('/api/request', action.payload);
        console.log('in request SAGA', newRequest)
        yield put({ type: 'CREATE_NEW_REQUEST', payload: newRequest.data});
      }
      catch (error) {
        console.log(`addRequest POST request failed`, error);
      }
}

    
function* fetchRequestItem() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('api/request', config);
        yield put({ type: 'SET_REQUEST_ITEM', payload: response.data });
    } catch (error) {
        console.log('fetchRequestItem get request failed', error)
    }

}


function* requestSaga() {
    yield takeLatest('FETCH_REQUESTS', fetchRequests);
    yield takeLatest('ADD_REQUEST', addRequest);
    yield takeLatest('FETCH_REQUEST_ITEM', fetchRequestItem);

};

export default requestSaga;