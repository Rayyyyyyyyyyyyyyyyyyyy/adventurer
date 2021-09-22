
import Weapon from "./Weapon"
import MeleeAttack from "../abilities/MeleeAttack"
import Role from "../characters/Role"
import Attack from "../abilities/Attack"
import Character from "../characters/Character"

export default class BasicSword extends Weapon {
    public readonly name = "Basic Sword"
    public attackStrategy = new MeleeAttack()

    public availableRoles = [
        Role.Swordsman,
        Role.Highwayman
    ]
    public switchAttackStrategy(type: Attack) {
        this.attackStrategy = type
    }
    public attack(self: Character, target: Character) {
        this.attackStrategy.attack(self, target)
    }

}