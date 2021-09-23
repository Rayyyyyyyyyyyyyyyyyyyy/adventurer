"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BasicRobe_1 = __importDefault(require("../armour/BasicRobe"));
var BasicWand_1 = __importDefault(require("../weapons/BasicWand"));
var WarlockEqipmentFactory = /** @class */ (function () {
    function WarlockEqipmentFactory() {
    }
    WarlockEqipmentFactory.prototype.createWeapon = function () {
        return new BasicWand_1.default();
    };
    WarlockEqipmentFactory.prototype.createArmour = function () {
        return new BasicRobe_1.default();
    };
    return WarlockEqipmentFactory;
}());
exports.default = WarlockEqipmentFactory;
