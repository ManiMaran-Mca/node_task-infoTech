const verifyAdmin=(req,res,next)=>{
    if(!req.user.isAdmin) return res.status(403).send("Access denied your not right person to delete")
    next()
}

export default verifyAdmin