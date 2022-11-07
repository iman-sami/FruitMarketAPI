export class serverError extends Error{
   constructor(msg,statusCode){
      super(msg)
    this.statusCode = statusCode

    this.isOperatinal = true;

    Error.captureStackTrace(this,this.constructor);
   }
}