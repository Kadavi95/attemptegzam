var board = null;
var game = new Chess();
game.load('3qk3/8/pppppppp/8/8/PPPPPPPP/8/3QK3 w KQkq - 0 1');


function onDragStart (source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false

  // only pick up pieces for White
  if (piece.search(/^b/) !== -1) return false
}

function makeRandomMove () {
  var possibleMoves = game.moves()

  // game over
  if (possibleMoves.length === 0) return

  var randomIdx = Math.floor(Math.random() * possibleMoves.length)
  game.move(possibleMoves[randomIdx])
  board.position(game.fen())
}

function onDrop (source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })

  // illegal move
  if (move === null) return 'snapback'

  // make random legal move for black
  window.setTimeout(makeRandomMove, 250)
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
  board.position(game.fen())
}



// var typesOfPawn = {
//     whiteNormalPawn: 'wP',
//     blackNormalPawn: 'bP',
//     whiteKing: 'wK',
//     blackKing: 'bK',
//     whiteQueen: 'wQ',
//     blackQueen: 'bQ'
// }

// var config = {
//     position: {
//         a3: typesOfPawn.whiteNormalPawn,
//         b3: typesOfPawn.whiteNormalPawn,
//         c3: typesOfPawn.whiteNormalPawn,
//         d1: typesOfPawn.whiteQueen,
//         d3: typesOfPawn.whiteNormalPawn,
//         e1: typesOfPawn.whiteKing,
//         e3: typesOfPawn.whiteNormalPawn,
//         f3: typesOfPawn.whiteNormalPawn,
//         g3: typesOfPawn.whiteNormalPawn,
//         h3: typesOfPawn.whiteNormalPawn,
//         a6: typesOfPawn.blackNormalPawn,
//         b6: typesOfPawn.blackNormalPawn,
//         c6: typesOfPawn.blackNormalPawn,
//         d6: typesOfPawn.blackNormalPawn,
//         d8: typesOfPawn.blackQueen,
//         e8: typesOfPawn.blackKing,
//         e6: typesOfPawn.blackNormalPawn,
//         f6: typesOfPawn.blackNormalPawn,
//         g6: typesOfPawn.blackNormalPawn,
//         h6: typesOfPawn.blackNormalPawn,
//     },
//     draggable: true,
//     dropOffBoard: 'snapback',
//     moveSpeed: 300,
//     snapbackSpeed: 100,
//     snapSpeed: 100,
//     snapSpeed: 50,
//     trashSpeed: 100,
//     onDragStart: onDragStart,
//     onDrop: onDrop,
//     onSnapEnd: onSnapEnd
// };

var config = {
    draggable: true,
    position: '3qk3/8/pppppppp/8/8/PPPPPPPP/8/3QK3 w KQkq - 0 1',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    moveSpeed: 300,
    snapbackSpeed: 100,
    snapSpeed: 100,
    snapSpeed: 50,
    trashSpeed: 100,
    
  }

board = Chessboard('myBoard', config);
$(window).resize(board.resize);