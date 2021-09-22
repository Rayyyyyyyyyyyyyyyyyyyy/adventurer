"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagicAttack = /** @class */ (function () {
    function MagicAttack() {
    }
    MagicAttack.prototype.attack = function (self, target) {
        console.log("\n        " + self.name + " casts magic and pierrces through " + target.name + " !!");
    };
    return MagicAttack;
}());
exports.default = MagicAttack;
