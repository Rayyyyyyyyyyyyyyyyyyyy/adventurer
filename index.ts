import Swordsman from "./characters/Swordsman"
import Warlock from "./characters/Warlock"

import Dagger from "./weapons/Dagger"
import BasicWand from "./weapons/BasicWand"

const swordsman = new Swordsman("MAXWell")
const warlock = new Warlock("Martin")

console.log("Using MeleeAttack: ");
swordsman.attack(warlock)

swordsman.equip(new Dagger())

console.log("Using StabAttack: ");
swordsman.attack(warlock)

try {
    swordsman.equip(new BasicWand())
} catch (err) {
    console.log(err);

}