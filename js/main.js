// var positions = [
//     {
//         pole: a3,
//         type: "wP"
//     },
//     {
//         pole: b3,
//         type: "wP",
//     }
// ]
// const example = positions.map((item) => (
//     {
//         item
//     }
// ))

// console.log(example);
var config = {
    position: {
        a3: 'wP',
        b3: 'wP',
        c3: 'wP',
        d3: 'wP',
        e3: 'wP',
        f3: 'wP',
        g3: 'wP',
        h3: 'wP',
        a6: 'bP',
        b6: 'bP',
        c6: 'bP',
        d6: 'bP',
        e6: 'bP',
        f6: 'bP',
        g6: 'bP',
        h6: 'bP',
    },
    draggable: true
}

var board = Chessboard('myBoard', config);
$(window).resize(board.resize)