import BasicArmour from "../armour/BasicArmour";
import BasicSword from "../weapons/BasicSword";
import EquipmentFactory from "./EquipmentFactory";

class SwordsmanEqipmentFactory implements EquipmentFactory {
    public createWeapon() {
        return new BasicSword()
    }
    public createArmour() {
        return new BasicArmour()
    }
}

export default SwordsmanEqipmentFactory