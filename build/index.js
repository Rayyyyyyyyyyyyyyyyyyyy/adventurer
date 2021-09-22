"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var Dagger_1 = __importDefault(require("./weapons/Dagger"));
var BasicWand_1 = __importDefault(require("./weapons/BasicWand"));
var swordsman = new Swordsman_1.default("MAXWell");
var warlock = new Warlock_1.default("Martin");
console.log("Using MeleeAttack: ");
swordsman.attack(warlock);
swordsman.equip(new Dagger_1.default());
console.log("Using StabAttack: ");
swordsman.attack(warlock);
try {
    swordsman.equip(new BasicWand_1.default());
}
catch (err) {
    console.log(err);
}
