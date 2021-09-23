import Role from "./Role"
import Attack from "../abilities/Attack"
import Weapon from "../weapons/Weapon";
import Armour from "../armour/Armour";
import Equipment from "../equipments/Equipment"

export default class Character {

    constructor(
        public readonly name: string,
        public readonly role: Role,
        private weaponRef: Weapon,
        private armourRef: Armour

    ) {
    }


    public equip(equipment: Equipment) {
        const { availableRoles: roles } = equipment

        if (
            roles.length == 0 || roles.indexOf(this.role) != -1
        ) {
            if (equipment instanceof Weapon) {
                this.weaponRef = equipment
            } else if (equipment instanceof Armour) {
                this.armourRef = equipment
            }
        } else {
            throw new Error(`
            ${this.role} cannot equip ${equipment.name}!!`)
        }
        console.log(`
        ${this.name} has equipment a ${equipment.type} - ${equipment.name}
        `);



    }

    public attack(target: Character) {
        this.weaponRef.attack(this, target)
    }


}