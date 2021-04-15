const {
    createProxyMiddleware
} = require("../node_modules/http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/api/game",
        createProxyMiddleware({
            target: `${process.env.REACT_APP_SERVER_PROTOCOL}://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`,
            secure: false,
            changeOrigin: true
        })
    )
}
