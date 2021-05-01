const aws = require('aws-sdk');

exports.handler= (event: any, context: any, callBack: any )=> {
    console.log(event);

    event.response.autoConfirmUser =true;

    if (event.request.userAttributes.hasOwnProperty("email")) {
        event.response.autoVerifyEmail = true;
    }

    if(event.request.userAttributes.hasOwnProperty("phone_number")){
        event.response.autoVerifyPhone= true
    }

    callBack(null, event)
}