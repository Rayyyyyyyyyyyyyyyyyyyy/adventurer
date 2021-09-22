import Role from "./Role"
import Character from "./Character"
import MagicAttack from "../abilities/MagicAttack";
import BasicWand from "../weapons/BasicWand";

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock, new BasicWand())
    }

    public attack(target: Character) {
        console.log(`
        ${this.name} casts magic and pierced through ${target.name}!`);

    }
}