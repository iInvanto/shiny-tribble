"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5010;
app.get("/api/data", 
// createProxyMiddleware({
//   target: "http://localhost:5010",
//   changeOrigin: true,
// }),
(req, res) => {
    res.send({ message: "Hello from Node.js Express with TypeScript!" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
