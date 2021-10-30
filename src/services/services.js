import axios from 'axios';


export const getID = (data, successCallback, failCallback) => {
    axios({
        url: `${ window.CONSTANTS.URL.MAIN_BACK }/tt/` + data,
        method: 'GET',
        responseType: 'text' // important
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