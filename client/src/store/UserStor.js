import {makeAutoObservable} from 'mobx'

export default class UserStore {    
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    // They are called only when a variable is changed inside the function
    get isAuth() {      
        return this._isAuth
    }

    get user() {
        return this._user
    }
}