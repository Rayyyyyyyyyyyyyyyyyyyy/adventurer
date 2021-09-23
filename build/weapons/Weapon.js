"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MeleeAttack_1 = __importDefault(require("../abilities/MeleeAttack"));
var Equipments_1 = __importDefault(require("../equipments/Equipments"));
var Weapon = /** @class */ (function () {
    function Weapon() {
        this.type = Equipments_1.default.Weapon;
        // name 代表武器名稱，為唯讀模式
        // availableRoles 代表可以被裝備該武器的職業
        // attackStrategy 代表武器跟 Attack 攻擊策略之間的參考點（reference point）
        // switchAttackStrategy 函式負責進行攻擊策略的切換
        // attack 方法就是負責實現角色攻擊的功能 —— 由於是策略模式，所以會藉由 attackStrategy 進行呼叫
    }
    Weapon.prototype.switcjAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    Weapon.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    return Weapon;
}());
exports.default = Weapon;
