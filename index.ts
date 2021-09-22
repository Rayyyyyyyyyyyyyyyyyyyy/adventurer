import Swordsman from "./characters/Swordsman"
import Warlock from "./characters/Warlock"

import Dagger from "./weapons/Dagger"
import BasicWand from "./weapons/BasicWand"
import BasicSword from "./weapons/BasicSword"
import StabAttack from "./abilities/StabAttack"

const sworTsingStab = new BasicSword()
sworTsingStab.switchAttackStrategy(new StabAttack())


const swordsman = new Swordsman("MAXWell")
const warlock = new Warlock("Martin")

console.log("Using BasicSwor - MeleeArrack: ");
swordsman.attack(warlock)


console.log("Using Dagger - StabAtack: ");
swordsman.equip(sworTsingStab)
swordsman.attack(warlock)


try {
    swordsman.equip(new BasicWand())

} catch (err) {
    // console.log(err);

}