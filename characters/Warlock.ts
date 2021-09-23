import Role from "./Role"
import Character from "./Character"
import MagicAttack from "../abilities/MagicAttack";
import BasicWand from "../weapons/BasicWand";
import WarlockEqipmentFactory from "../equipments/WarlockEqipmentFactory";

export default class Warlock extends Character {
    constructor(name: string) {
        let WEF = new WarlockEqipmentFactory()
        super(
            name,
            Role.Swordsman,
            WEF.createWeapon(),
            WEF.createArmour()
        )
    }

    public attack(target: Character) {
        console.log(`
        ${this.name} casts magic and pierced through ${target.name}!`);

    }
}