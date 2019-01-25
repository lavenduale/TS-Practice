var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        var _this = this;
        this.username = username;
        this.age = 22; // protected same as private but also can be used in inhereited class
        this.printAge = function () {
            console.log(_this.age);
            _this.setType("Old Guys");
        };
        this.setType = function (type1) {
            _this.type1 = type1;
            console.log(_this.type1);
        };
        this.name = name;
    }
    return Person;
}());
var person = new Person("Ethan", "fake ethan"); // two different ways 
console.log(person.name, person.username);
person.printAge(); // 22 as default
//person.setType("Cool guy");    // wont work, set it to private
// Inheritance
var Ethan = /** @class */ (function (_super) {
    __extends(Ethan, _super);
    //name = "Ethan";
    function Ethan(username) {
        var _this = _super.call(this, "Ethan", username) || this;
        _this.age = 22; // protected type can be inherited and used in sub class
        return _this;
    }
    return Ethan;
}(Person));
var ethan_person = new Ethan("anaa");
console.log(ethan_person);
