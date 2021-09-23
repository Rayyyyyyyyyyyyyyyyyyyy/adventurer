import Role from "./Role"
import Character from "./Character"
import SwordsmanEqipmentFactory from "../equipments/SwordsmanEqipmentFactory"

export default class Swordsman extends Character {
    constructor(
        name: string,
    ) {
        let SEF = new SwordsmanEqipmentFactory()
        super(
            name,
            Role.Swordsman,
            SEF.createWeapon(),
            SEF.createArmour()
        )

    }
}