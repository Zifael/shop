class ApiEroor extends Error {
    
    constructor(status, message){
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiEroor(404, message)
    }
    static internal(message){
        return new ApiEroor(500, message)
    }

    static forbidan(message){
        return new ApiEroor(403, message)
    }
}

module.exports =  ApiEroor