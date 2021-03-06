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
var StabAttack_1 = __importDefault(require("../abilities/StabAttack"));
var Weapon_1 = __importDefault(require("./Weapon"));
var Dagger = /** @class */ (function (_super) {
    __extends(Dagger, _super);
    function Dagger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Dagger";
        _this.attackStrategy = new StabAttack_1.default();
        _this.availableRoles = [];
        return _this;
    }
    Dagger.prototype.switchAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    Dagger.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    return Dagger;
}(Weapon_1.default));
exports.default = Dagger;
