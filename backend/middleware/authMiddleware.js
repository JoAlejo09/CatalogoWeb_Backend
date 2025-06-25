import jwt from "jsonwebtoken"

export const verificarToken = (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({msg: "No autorizado"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = { id: decoded.id };
        next();
    } catch {
        res.status(401).json({ msg: "Token inválido" });
    }
}
