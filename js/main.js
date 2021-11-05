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
var typesOfPawn = {
    whiteNormalPawn: 'wP',
    blackNormalPawn: 'bP',
    whiteKing: 'wK',
    blackKing: 'bK',
    whiteQueen: 'wQ',
    blackQueen: 'bQ'
}

var config = {
    position: {
        a3: typesOfPawn.whiteNormalPawn,
        b3: typesOfPawn.whiteNormalPawn,
        c3: typesOfPawn.whiteNormalPawn,
        d1: typesOfPawn.whiteQueen,
        d3: typesOfPawn.whiteNormalPawn,
        e1: typesOfPawn.whiteKing,
        e3: typesOfPawn.whiteNormalPawn,
        f3: typesOfPawn.whiteNormalPawn,
        g3: typesOfPawn.whiteNormalPawn,
        h3: typesOfPawn.whiteNormalPawn,
        a6: typesOfPawn.blackNormalPawn,
        b6: typesOfPawn.blackNormalPawn,
        c6: typesOfPawn.blackNormalPawn,
        d6: typesOfPawn.blackNormalPawn,
        d8: typesOfPawn.blackQueen,
        e8: typesOfPawn.blackKing,
        e6: typesOfPawn.blackNormalPawn,
        f6: typesOfPawn.blackNormalPawn,
        g6: typesOfPawn.blackNormalPawn,
        h6: typesOfPawn.blackNormalPawn,
    },
    draggable: true,
    dropOffBoard: 'snapback',
    moveSpeed: 300,
    snapbackSpeed: 100,
    snapSpeed: 100,
    snapSpeed: 50,
    trashSpeed: 100

}

var board = Chessboard('myBoard', config);
$(window).resize(board.resize)