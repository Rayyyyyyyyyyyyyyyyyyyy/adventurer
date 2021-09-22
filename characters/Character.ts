import Role from "./Role"
import Attack from "../abilities/Attack"
import Weapon from "../weapons/Weapon";

export default class Character {
    // private attackRef: Attack

    constructor(
        public readonly name: string,
        public readonly role: Role,
        private weaponRef: Weapon,

    ) {
        // this.attackRef = this.weaponRef.attackStrategy
    }



    // public introduce() {
    //     console.log(`
    //     hi i'm ${this.name} the ${this.role}
    //     `);
    // }


    // public switchAttackStrategy(type: Attack) {
    //     this.attackRef = type
    // }

    public equip(weapon: Weapon) {
        const { availableRoles: roles } = weapon

        if (
            roles.length == 0 || roles.indexOf(this.role) != -1
        ) {
            this.weaponRef = weapon

        } else {
            throw new Error(`
            ${this.role} cannot equip ${weapon.name}!!`)
        }


    }

    public attack(target: Character) {
        this.weaponRef.attack(this, target)
    }


}