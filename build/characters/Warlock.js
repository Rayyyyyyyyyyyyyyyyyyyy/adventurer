"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("./Role"));
var Character_1 = __importDefault(require("./Character"));
var WarlockEqipmentFactory_1 = __importDefault(require("../equipments/WarlockEqipmentFactory"));
var Warlock = /** @class */ (function (_super) {
    __extends(Warlock, _super);
    function Warlock(name) {
        var _this = this;
        var WEF = new WarlockEqipmentFactory_1.default();
        _this = _super.call(this, name, Role_1.default.Swordsman, WEF.createWeapon(), WEF.createArmour()) || this;
        return _this;
    }
    Warlock.prototype.attack = function (target) {
        console.log("\n        " + this.name + " casts magic and pierced through " + target.name + "!");
    };
    return Warlock;
}(Character_1.default));
exports.default = Warlock;
