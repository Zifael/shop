import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor(){
        this._types = []
        this._brand = []
        this._device = []
        this._selectType = {}        
        this._selectBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 4

        makeAutoObservable(this)
    }
    
    setTypes (type) {
        this._types = type
    }
    setBrand (brand) {
        this._brand = brand
    }
    setDevice (device) {
        this._device = device
    }

    setSelectType (type) {
        this.setPage(1)
        this._selectType = type
    }

    setSelectBrand (brand) {
        this.setPage(1)
        this._selectBrand = brand
    }

    setPage (page) {
        this._page = page
    }

    setTotalCount (totalCount) {
        this._totalCount = totalCount
    }
    


    // They are called only when a variable is changed inside the function
    get types () {
        return this._types
    }
    get brand () {
        return this._brand
    }
    get device () {
        return this._device
    }

    get selectType () {
        return this._selectType
    }

    get selectBrand () {
        return this._selectBrand
    }

    get page () {
        return this._page
    }

    get totalCount () {
        return this._totalCount
    }

    get limit () {
        return this._limit
    }
}