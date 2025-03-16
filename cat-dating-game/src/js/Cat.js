class Cat {
    constructor(name, hobby, partner, work) {
        this.name = name.toUpperCase();
        this.hobby = hobby;
        this.partner = partner;
        this.work = work;
    }

    getName() {
        return this.name;
    }

    getHobby() {
        return this.hobby;
    }

    getPartner() {
        return this.partner;
    }

    getWork() {
        return this.work;
    }

    setName(name) {
        this.name = name;
    }

    setHobby(hobby) {
        this.hobby = hobby;
    }

    setPartner(partner) {
        this.partner = partner;
    }

    setWork(work) {
        this.work = work;
    }
}