var CHESS = CHESS || {};

CHESS.Move = function ($) {

/**
 * @constructor
 * @param {Square} start
 * @param {Square} end
 */
return function (start, end) {
    var startSquare,
        endSquare;

    this.getEndSquare = function () {
        return endSquare;
    };

    this.getStartSquare = function () {
        return startSquare;
    };

    var setMove = function (start, end) {
        startSquare = start.clone();
        endSquare = end.clone();
    };

    setMove(start, end);
};

}(CHESS);
