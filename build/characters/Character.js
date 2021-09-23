"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon_1 = __importDefault(require("../weapons/Weapon"));
var Armour_1 = __importDefault(require("../armour/Armour"));
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef, armourRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.armourRef = armourRef;
    }
    Character.prototype.equip = function (equipment) {
        var roles = equipment.availableRoles;
        if (roles.length == 0 || roles.indexOf(this.role) != -1) {
            if (equipment instanceof Weapon_1.default) {
                this.weaponRef = equipment;
            }
            else if (equipment instanceof Armour_1.default) {
                this.armourRef = equipment;
            }
        }
        else {
            throw new Error("\n            " + this.role + " cannot equip " + equipment.name + "!!");
        }
        console.log("\n        " + this.name + " has equipment a " + equipment.type + " - " + equipment.name + "\n        ");
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
