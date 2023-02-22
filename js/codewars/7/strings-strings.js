Number.prototype.toString = function () {
    return this + '';
}
Array.prototype.toString = function () {
    return `[${this.join(',')}]`;
}
Boolean.prototype.toString = function () {
    return this + '';
}
