import Swordsman from "./characters/Swordsman"
import Warlock from "./characters/Warlock"

// import Dagger from "./weapons/Dagger"
// import BasicWand from "./weapons/BasicWand"
// import BasicSword from "./weapons/BasicSword"

import Weapons from "./weapons/Weapons"
import WeaponFactory from "./weapons/WeaponFactory"


const swordsman = new Swordsman("MAXWell")
const warlock = new Warlock("Martin")

const weaponFactory = new WeaponFactory()

console.log("Using BasicSword - MeleeAttack");
swordsman.attack(warlock)

const dagger = weaponFactory.createWeapon(Weapons.Dagger)
swordsman.equip(dagger)

console.log("Using Dagger - StabAttack");
swordsman.attack(warlock)
