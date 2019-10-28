// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        var _this = this;
        Object.keys(this.map).forEach(function (key) { return console.log(key, _this.map[key]); });
    };
    return MyMap;
}());
var stringMap = new MyMap();
stringMap.setItem('one', 'two');
stringMap.setItem('three', 'four');
console.log(stringMap.getItem('one'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
