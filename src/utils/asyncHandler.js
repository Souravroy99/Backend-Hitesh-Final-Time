const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn).catch((err) => next(err))
    }
}
                         
export default asyncHandler


// const asyncHandler = (fn) => async(req, res, next) => {
//     try { 
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }