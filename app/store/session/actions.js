import * as types from './actionTypes';
import firebaseService from '../../services/firebase';


function sessionRestoring() {
    return {
        type: types.SESSION_LOADING,
    }
}

function sessionLoading() {
    return {
        type: types.SESSION_LOADING,
    }
}

function sessionSuccess(user) {
    return {
        type: types.SESSION_SUCCESS,
        user,
    }
}

function sessionError(error) {
    return {
        type: types.SESSION_ERROR,
        error,
    }
}

const sessionLogout = () => ({
    type: types.SESSION_LOGOUT
})

function restoreSession() {
    return (dispatch) => {
        dispatch(sessionRestoring());

        let unsubscribe = firebaseService.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(sessionSuccess(user));
                unsubscribe();
            } else {
                dispatch(sessionLogout());
                unsubscribe();
            }
        })
    }
}

function loginUser(email, password) {
    return (dispatch) => {
        dispatch(sessionLoading());

        firebaseService.auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password)
        .catch(error => {
            dispatch(sessionError(error.message));
            alert(error.message);
        })

        let unsubscribe = firebaseService.auth()
        .onAuthStateChanged(user => {
            if (user) {
                dispatch(sessionSuccess(user));
                unsubscribe();
            }
        })
    }
}

function signupUser(email, password) {
    return (dispatch) => {
        dispatch(sessionLoading());

        firebaseService.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
            dispatch(sessionError(error.message));
            alert(error.message);
        });

        let unsubscribe = firebaseService.auth()
        .onAuthStateChanged(user => {
            if (user) {
                dispatch(sessionSuccess(user));
                unsubscribe();
                
            }
        })
    }
}

function logoutUser() {
    return (dispatch) => {
        dispatch(sessionLoading());

        firebaseService.auth()
        .signOut()
        .then(() => {
            dispatch(sessionLogout());
        })
        .catch(error => {
            dispatch(sessionError(error.message));
        })
    }
}

export default {
    restoreSession,
    loginUser,
    signupUser,
    logoutUser,
}