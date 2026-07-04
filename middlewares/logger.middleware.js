
const LoggerOF  = (req, res, next) => {
    const now = new Date();
    const data = now.toLocaleDateString();
    const time = now.toLocaleTimeString()
    console.log(
        `[${data} ,${time}] ${req.method} ${req.originalUrl} `
    );

    next();
};
export default LoggerOF