export default class SignupAction{
    static GET_SIGNUP = 'GET_SIGNUP';
  
    static getSignup(signup){
        console.log(signup)
        return {
            type: SignupAction.GET_SIGNUP,
            signup
        }
    }
}