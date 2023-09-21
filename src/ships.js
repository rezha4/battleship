class Ships {
    constructor(size) {
        this.size = size;
        this.hp = size;
    }
    set hit(1) {
        this.hp = 1;
    }
    isSunk() {
        if (this.hp == 0) {
            return this.hp;
        } else return this.hp;
    }
}

export { Ships }