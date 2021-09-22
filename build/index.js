"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("./characters/Role"));
var Character_1 = __importDefault(require("./characters/Character"));
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var swordsman = new Character_1.default("Maxwell", Role_1.default.Swordsman);
swordsman.introduce();
var swordsman2 = new Swordsman_1.default("MAXWell");
swordsman2.introduce();
var warlock = new Warlock_1.default("Martin");
warlock.introduce();
console.log('Swordsman attacking the warlock  ');
swordsman2.attack(warlock);
console.log('Warlock attacking the warlock  ');
warlock.attack(swordsman);
