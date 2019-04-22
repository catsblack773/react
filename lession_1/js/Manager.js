class Manager extends Employee {
    constructor() {
        super();
        this.dev = [];
    }

    set(nameDev) {
        this.dev.push(nameDev);
    }

    get() {
        console.log(this.dev);
    }

    delete(nameDev) {
        this.dev.pop(nameDev);
    }
}