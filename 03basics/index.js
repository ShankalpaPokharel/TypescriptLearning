var _User_id;
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "kathmandu";
        _User_id.set(this, "sdfsdf"); //here # work as a pirvate keyword
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
_User_id = new WeakMap();
var john = new User("", "", "");
console.log(john.city);
