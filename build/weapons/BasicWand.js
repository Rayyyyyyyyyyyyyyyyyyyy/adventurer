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
var Weapon_1 = __importDefault(require("./Weapon"));
var Role_1 = __importDefault(require("../characters/Role"));
var MagicAttack_1 = __importDefault(require("../abilities/MagicAttack"));
var BasicWand = /** @class */ (function (_super) {
    __extends(BasicWand, _super);
    function BasicWand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Basic Wand";
        _this.attackStrategy = new MagicAttack_1.default();
        _this.availableRoles = [
            Role_1.default.Warlock,
        ];
        return _this;
    }
    BasicWand.prototype.switchAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    BasicWand.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    return BasicWand;
}(Weapon_1.default));
exports.default = BasicWand;
