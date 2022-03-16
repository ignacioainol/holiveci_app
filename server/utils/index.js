

// const getToken = (user) => {
//     const { user_id, nickname, email, role_id } = user;
//     return jwt.sign({
//         _id: user_id,
//         nickname,
//         email,
//         role_id
//     }, process.env.JWT_SECRET, {
//         expiresIn: '48h'
//     })
// }

// module.exports = {
//     getToken
// }

// export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.header('auth-token');
//     if (!token) return res.status(401).json('Access denied');

//     const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokensecret') as IPayload;
//     console.log(payload);
//     req.userId = payload._id;
//     next();
// }
