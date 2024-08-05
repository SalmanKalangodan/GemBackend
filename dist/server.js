"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./configs/db/db");
const compeny_rotes_1 = __importDefault(require("./routes/compeny/super_admin/compeny_rotes"));
const error_handler_1 = require("./middlewares/error/error_handler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/compenys', compeny_rotes_1.default);
app.use(error_handler_1.errorHandler);
(0, db_1.mongodb)();
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map