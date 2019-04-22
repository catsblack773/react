class Developer extends Employee {
    constructor() {
        super();
        this.nameManager;
    }

    edit(nameManager) {
        this.nameManager = nameManager;
    }

    get() {
        console.log(this.nameManager);
    }
}