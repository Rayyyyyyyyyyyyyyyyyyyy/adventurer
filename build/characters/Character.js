"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    // private attackRef: Attack
    function Character(name, role, weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        // this.attackRef = this.weaponRef.attackStrategy
    }
    // public introduce() {
    //     console.log(`
    //     hi i'm ${this.name} the ${this.role}
    //     `);
    // }
    // public switchAttackStrategy(type: Attack) {
    //     this.attackRef = type
    // }
    Character.prototype.equip = function (weapon) {
        var roles = weapon.availableRoles;
        if (roles.length == 0 || roles.indexOf(this.role) != -1) {
            this.weaponRef = weapon;
        }
        else {
            throw new Error("\n            " + this.role + " cannot equip " + weapon.name + "!!");
        }
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
