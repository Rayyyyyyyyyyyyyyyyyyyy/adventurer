import Role from "./characters/Role"
import Character from "./characters/Character"
import Swordsman from "./characters/Swordsman"
import Warlock from "./characters/Warlock"

const swordsman = new Character("Maxwell", Role.Swordsman)
swordsman.introduce()

const swordsman2 = new Swordsman("MAXWell")
swordsman2.introduce()
const warlock = new Warlock("Martin")
warlock.introduce()


console.log('Swordsman attacking the warlock  ');
swordsman2.attack(warlock)
console.log('Warlock attacking the warlock  ');
warlock.attack(swordsman)