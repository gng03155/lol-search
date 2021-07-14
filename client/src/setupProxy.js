const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    console.log("들어옴?");
    app.use(
        ["/api/data"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );

};

