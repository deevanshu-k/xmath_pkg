"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pow = exports.add = exports.multiply = void 0;
function multiply() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var ans = 1;
    args.forEach(function (v) {
        ans = ans * v;
    });
    return ans;
}
exports.multiply = multiply;
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (v) {
        sum = sum + v;
    });
    return sum;
}
exports.add = add;
function pow(base, power) {
    if (power == 0) {
        return 1;
    }
    if ((power & 1) != 0) {
        return base * pow(base, power - 1);
    }
    return pow(base * base, power / 2);
}
exports.pow = pow;
