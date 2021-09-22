import StabAttack from "../abilities/StabAttack"
import Weapon from "./Weapon"

export default class Dagger implements Weapon {
    public readonly name = "Dagger"

    public attackStrategy = new StabAttack()

    public availableRoles = []
}