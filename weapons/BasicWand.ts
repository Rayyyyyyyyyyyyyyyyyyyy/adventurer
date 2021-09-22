
import Weapon from "./Weapon"
import Role from "../characters/Role"
import MagicAttack from "../abilities/MagicAttack"
import Character from "../characters/Character"
import Attack from "../abilities/Attack"

export default class BasicWand extends Weapon {
    public readonly name = "Basic Wand"
    public attackStrategy = new MagicAttack()

    public availableRoles = [
        Role.Warlock,
    ]
    public switchAttackStrategy(type: Attack) {
        this.attackStrategy = type
    }
    public attack(self: Character, target: Character) {
        this.attackStrategy.attack(self, target)
    }

}