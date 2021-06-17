import Axios from 'axios';

export const getPin = async (pin) => {
    
    let config = {
        method: 'get',
        url: 'https://api.postalpincode.in/pincode/' + pin,
        // headers: {
        //     session: ''
        // },
        // data: <body code>
    }

     let data = await Axios(config);

     return data;

}


export const postPin = async (pin) => {
    
    let config = {
        method: 'get',
        url: 'https://api.postalpincode.in/pincode/' + pin,
        // headers: {
        //     session: ''
        // },
        // data: <body code>
    }

     let data = await Axios(config);

     return data;

}