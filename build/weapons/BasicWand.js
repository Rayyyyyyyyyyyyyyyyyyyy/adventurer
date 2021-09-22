"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("../characters/Role"));
var MagicAttack_1 = __importDefault(require("../abilities/MagicAttack"));
var BasicWand = /** @class */ (function () {
    function BasicWand() {
        this.name = "Basic Wand";
        this.attackStrategy = new MagicAttack_1.default();
        this.availableRoles = [
            Role_1.default.Warlock,
        ];
    }
    return BasicWand;
}());
exports.default = BasicWand;
