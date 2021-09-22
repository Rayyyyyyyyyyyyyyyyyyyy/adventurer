import Attack from "../abilities/Attack"
import StabAttack from "../abilities/StabAttack"
import Character from "../characters/Character"
import Weapon from "./Weapon"

export default class Dagger extends Weapon {
    public readonly name = "Dagger"

    public attackStrategy = new StabAttack()

    public availableRoles = []

    public switchAttackStrategy(type: Attack) {
        this.attackStrategy = type
    }
    public attack(self: Character, target: Character) {
        this.attackStrategy.attack(self, target)
    }
}