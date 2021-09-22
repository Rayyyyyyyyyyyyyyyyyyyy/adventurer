import Role from "./Role"

export default class Character {
    constructor(
        public readonly name: string,
        public readonly role: string
    ) { }


    public introduce() {
        console.log(`
        hi i'm ${this.name} the ${this.role}
        `);
    }

    public attack(target: Character) {
        console.log(`
        ${this.name} attacks ${target.name} useing the sword!!
        `);

    }
}