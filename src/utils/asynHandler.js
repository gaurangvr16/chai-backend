const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, req, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}


// const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async () => {}

// const asyncHandler = (requestHandler) => async(req, res, next)=> {
//     try{
//         await requestHandler(req, res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
//}