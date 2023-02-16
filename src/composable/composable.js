import { callHandler } from 'web-bridge-gateway'

export const resetNativeAppBarTitle =()=>{
    callHandler('setBarTitle', {title: ''}).catch(error => console.log(error));
}
export const setNativeAppBarTitle =(title)=>{
    callHandler('setBarTitle', {title: title}).catch(error => console.log(error));
}