import axios from 'axios';


export const getData = (loginID, charID, successCallback, failCallback) => {
    axios({
        url: `${ window.CONSTANTS.URL.MAIN_BACK }/chardata/` + loginID +'/'+ charID,
        method: 'GET',
    }).then(response => {
        if (response.data) {
            successCallback(response.data);
        } else {
            console.warn('File is not exist')
            failCallback();
        }
    }).catch(error => {
        console.warn("Failed to get info ", error);
        failCallback();
    });

}

export const setTaskData = (data, successCallback, failCallback) => {
    axios({
        url: `${ window.CONSTANTS.URL.MAIN_BACK }/taskdata`,
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data:data
    }).then(response => {
        if (response.data) {
            successCallback(response.data);
        } else {
            failCallback();
        }
    }).catch(error => {
        failCallback(error);
    })
}

export const setJoinAccount = (data, successCallback, failCallback) => {
    axios({
        url: `${ window.CONSTANTS.URL.MAIN_BACK }/join`,
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data:data
    }).then(response => {
        if (response.data) {
            successCallback(response.data);
        } else {
            failCallback();
        }
    }).catch(error => {
        failCallback(error);
    })
}

export const login = (data, successCallback, failCallback) => {
    axios({
        url: `${ window.CONSTANTS.URL.MAIN_BACK }/login`,
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data:data
    }).then(response => {
        if (response.data) {
            successCallback(response.data);
        } else {
            failCallback();
        }
    }).catch(error => {
        failCallback(error);
    })
}

