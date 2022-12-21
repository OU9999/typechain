class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        if (this.storage[key] !== undefined) {
            return console.log(`${key}가 이미 존재합니다. update 호출 바랍니다.`);
        }
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
}
