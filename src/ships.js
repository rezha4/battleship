class Ships {
    constructor(size) {
        this.size = size;
        this.hp = size;
    }
    hit() {
        this.hp -= 1;
    }
    isSunk() {
        if (this.hp == 0) {
            return true;
        } else return false;
    }
}

export { Ships }