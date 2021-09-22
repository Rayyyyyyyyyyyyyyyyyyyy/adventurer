"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var BasicWand_1 = __importDefault(require("./weapons/BasicWand"));
var BasicSword_1 = __importDefault(require("./weapons/BasicSword"));
var StabAttack_1 = __importDefault(require("./abilities/StabAttack"));
var sworTsingStab = new BasicSword_1.default();
sworTsingStab.switchAttackStrategy(new StabAttack_1.default());
var swordsman = new Swordsman_1.default("MAXWell");
var warlock = new Warlock_1.default("Martin");
console.log("Using BasicSwor - MeleeArrack: ");
swordsman.attack(warlock);
console.log("Using Dagger - StabAtack: ");
swordsman.equip(sworTsingStab);
swordsman.attack(warlock);
try {
    swordsman.equip(new BasicWand_1.default());
}
catch (err) {
    // console.log(err);
}
