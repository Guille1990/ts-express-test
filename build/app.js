"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('hello world');
});
app.use('/', routes_1.default);
app.listen(PORT, function () {
    console.log('Hello word');
});
