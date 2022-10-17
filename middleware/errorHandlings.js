
// error handling middleware 
function sendError(err,res){
  res.status(err.statusCode).json({
    message:err.status,
    error:err,
    stack:err.stack
  })
}

export function CatchGlobalError(err,req,res,next){
    sendError(err,res)
}

export function catchAsync(fn){
    return (req,res,next)=>fn(req,res,next).catch(next);
}