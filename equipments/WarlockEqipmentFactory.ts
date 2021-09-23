import BasicRobe from "../armour/BasicRobe";
import BasicWand from "../weapons/BasicWand";
import EquipmentFactory from "./EquipmentFactory";

class WarlockEqipmentFactory implements EquipmentFactory {
    public createWeapon() {
        return new BasicWand()
    }
    public createArmour() {
        return new BasicRobe()
    }
}

export default WarlockEqipmentFactory