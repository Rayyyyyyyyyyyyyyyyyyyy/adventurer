import Attack from "../abilities/Attack"
import MeleeAttack from "../abilities/MeleeAttack"
import Character from "../characters/Character"
import Role from "../characters/Role"
import Equipments from "../equipments/Equipments"

export default abstract class Weapon {
    abstract name: string
    public type = Equipments.Weapon

    abstract availableRoles: Role[]

    abstract attackStrategy = new MeleeAttack()

    public switcjAttackStrategy(type: Attack) {
        this.attackStrategy = type
    }

    public attack(self: Character, target: Character) {
        this.attackStrategy.attack(self, target)
    }

    // name 代表武器名稱，為唯讀模式
    // availableRoles 代表可以被裝備該武器的職業
    // attackStrategy 代表武器跟 Attack 攻擊策略之間的參考點（reference point）
    // switchAttackStrategy 函式負責進行攻擊策略的切換
    // attack 方法就是負責實現角色攻擊的功能 —— 由於是策略模式，所以會藉由 attackStrategy 進行呼叫
}