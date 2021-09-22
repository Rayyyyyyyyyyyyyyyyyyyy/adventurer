"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role) {
        this.name = name;
        this.role = role;
    }
    Character.prototype.introduce = function () {
        console.log("\n        hi i'm " + this.name + " the " + this.role + "\n        ");
    };
    Character.prototype.attack = function (target) {
        console.log("\n        " + this.name + " attacks " + target.name + " useing the sword!!\n        ");
    };
    return Character;
}());
exports.default = Character;
