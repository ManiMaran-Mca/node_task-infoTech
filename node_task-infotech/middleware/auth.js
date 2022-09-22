import jwt from 'jsonwebtoken'

const auth=(req,res,next)=>{
    const token=req.header('token')
    if(!token) res.status(401).send("Access denied token unavailable")
    try {
        const decoded=jwt.verify(token,process.env.JWT)
        req.user=decoded;
        // console.log(req.user);
        next()
    }
    catch(err){
        res.send(err.message)
    }
}

export default auth;