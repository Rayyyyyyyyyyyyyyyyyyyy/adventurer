"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BasicArmour_1 = __importDefault(require("../armour/BasicArmour"));
var BasicSword_1 = __importDefault(require("../weapons/BasicSword"));
var SwordsmanEqipmentFactory = /** @class */ (function () {
    function SwordsmanEqipmentFactory() {
    }
    SwordsmanEqipmentFactory.prototype.createWeapon = function () {
        return new BasicSword_1.default();
    };
    SwordsmanEqipmentFactory.prototype.createArmour = function () {
        return new BasicArmour_1.default();
    };
    return SwordsmanEqipmentFactory;
}());
exports.default = SwordsmanEqipmentFactory;
