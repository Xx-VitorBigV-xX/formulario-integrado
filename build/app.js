"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get('/public', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'formulario.html'));
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
