"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
// import Dagger from "./weapons/Dagger"
// import BasicWand from "./weapons/BasicWand"
// import BasicSword from "./weapons/BasicSword"
var Weapons_1 = __importDefault(require("./weapons/Weapons"));
var WeaponFactory_1 = __importDefault(require("./weapons/WeaponFactory"));
var swordsman = new Swordsman_1.default("MAXWell");
var warlock = new Warlock_1.default("Martin");
var weaponFactory = new WeaponFactory_1.default();
console.log("Using BasicSword - MeleeAttack");
swordsman.attack(warlock);
var dagger = weaponFactory.createWeapon(Weapons_1.default.Dagger);
swordsman.equip(dagger);
console.log("Using Dagger - StabAttack");
swordsman.attack(warlock);
