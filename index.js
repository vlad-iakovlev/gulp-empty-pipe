'use strict';

const through = require('through');

let empty = through(function (data) {
    this.emit('data', data);
}, function () {
    this.emit('end');
});

module.exports = empty;