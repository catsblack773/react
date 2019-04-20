class Manager extends Employee {
    constructor(name) {
        super();
        this.name = name;
        this.dev = [];
    }

    get(nameDev) {
        this.dev.push(nameDev);
    }

    set() {
        console.log(this.dev);
    }

    delete(nameDev) {
        this.dev.pop(nameDev);
    }
}