'use strict';
function minesweeper$ExposedSquare$type($) {
   return ($.rank >= 0) && ($.rank <= 8);
}
function minesweeper$ExposedSquare(rank, bomb) {
   return new Wy.Record({rank: rank, holdsBomb: bomb});
}
function minesweeper$HiddenSquare(bomb, flag) {
   return new Wy.Record({holdsBomb: bomb, flagged: flag});
}
function minesweeper$Board$type($) {
   return ($.width * $.height) === $.squares.length;
}
function minesweeper$Board(width, height) {
   Wy.assert((width * height) >= 0);
   let squares = Wy.array(minesweeper$HiddenSquare(false, false), width * height);
   return new Wy.Record({squares: Wy.copy(squares), width: width, height: height});
}
function minesweeper$getSquare(b, col, row) {
   let rowOffset = b.width * row;
   Wy.assert(rowOffset >= 0);
   Wy.assert(rowOffset <= (b.squares.length - b.width));
   return Wy.copy(b.squares[rowOffset + col]);
}
function minesweeper$setSquare(b, col, row, sq) {
   let rowOffset = b.width * row;
   Wy.assert(rowOffset >= 0);
   Wy.assert(rowOffset <= (b.squares.length - b.width));
   b.squares[rowOffset + col] = Wy.copy(sq);
   return Wy.copy(b);
}
function minesweeper$flagSquare(b, col, row) {
   let sq = minesweeper$getSquare(Wy.copy(b), col, row);
   if(is$Q6Squarer2B9holdsBombB7flagged(sq))  {
       {
         const $0 = !sq.flagged;
         sq.flagged = $0;
      }
       {
         const $1 = minesweeper$setSquare(Wy.copy(b), col, row, Wy.copy(sq));
         b = $1;
      }
   }
   return Wy.copy(b);
}
function minesweeper$determineRank$Q5BoardQ3natQ3nat(b, col, row) {
   let rank = 0;
   for(let r = std$math$max$II(0, row - 1);r < std$math$min$II(b.height, row + 2);r = r + 1) {
      for(let c = std$math$max$II(0, col - 1);c < std$math$min$II(b.width, col + 2);c = c + 1) {
         let sq = minesweeper$getSquare(Wy.copy(b), c, r);
         if(minesweeper$holdsBomb$Q6Square(Wy.copy(sq)))  {
             {
               const $2 = rank + 1;
               rank = $2;
            }
         }
      }
   }
   return rank;
}
function minesweeper$exposeSquare(b, col, row) {
   let sq = minesweeper$getSquare(Wy.copy(b), col, row);
   let rank = minesweeper$determineRank$Q5BoardQ3natQ3nat(Wy.copy(b), col, row);
   if(is$Q6Squarer2B9holdsBombB7flagged(sq) && (!sq.flagged))  {
       {
         const $3 = minesweeper$ExposedSquare(rank, sq.holdsBomb);
         sq = $3;
      }
       {
         const $4 = minesweeper$setSquare(Wy.copy(b), col, row, Wy.copy(sq));
         b = $4;
      }
      if(rank === 0)  {
         return minesweeper$exposeNeighbours$Q5BoardQ3natQ3nat(Wy.copy(b), col, row);
      }
   }
   return Wy.copy(b);
}
function minesweeper$exposeNeighbours$Q5BoardQ3natQ3nat(b, col, row) {
   for(let r = std$math$max$II(0, row - 1);r < std$math$min$II(b.height, row + 2);r = r + 1) {
      for(let c = std$math$max$II(0, col - 1);c < std$math$min$II(b.width, col + 2);c = c + 1) {
          {
            const $5 = minesweeper$exposeSquare(Wy.copy(b), c, r);
            b = $5;
         }
      }
   }
   return Wy.copy(b);
}
function minesweeper$isGameOver(b) {
   let playerWon;
   let gameOver;
   let isOver = true;
   let hasWon = true;
   for(let i = 0;i < b.squares.length;i = i + 1) {
      let sq = Wy.copy(b.squares[i]);
      if(is$Q6Squarer2B9holdsBombB7flagged(sq) && (!sq.holdsBomb))  {
         isOver = false;
      } else  {
         if(is$u2Q13ExposedSquareQ12HiddenSquareQ13ExposedSquare(sq) && sq.holdsBomb)  {
            isOver = true;
            hasWon = false;
            break;
         }
      }
   }
   return [isOver, hasWon];
}
function minesweeper$holdsBomb$Q6Square(sq) {
   if(is$Q6SquareQ13ExposedSquare(sq))  {
      return sq.holdsBomb;
   } else  {
      return sq.holdsBomb;
   }
}
function is$Q6Squarer2B9holdsBombB7flagged(v) {
   if(((typeof v.holdsBomb) === "undefined") || ((typeof v.holdsBomb) !== "boolean"))  {
      return false;
   } else if(((typeof v.flagged) === "undefined") || ((typeof v.flagged) !== "boolean"))  {
      return false;
   }
   return true;
}
function is$u2Q13ExposedSquareQ12HiddenSquareQ13ExposedSquare(v) {
   return is$u2Q13ExposedSquareQ12HiddenSquarer2B9holdsBombI4rank(v) && minesweeper$ExposedSquare$type(v);
}
function is$Q6SquareQ13ExposedSquare(v) {
   return is$Q6Squarer2B9holdsBombI4rank(v) && minesweeper$ExposedSquare$type(v);
}
function is$u2Q13ExposedSquareQ12HiddenSquarer2B9holdsBombI4rank(v) {
   if(((typeof v.holdsBomb) === "undefined") || ((typeof v.holdsBomb) !== "boolean"))  {
      return false;
   } else if(((typeof v.rank) === "undefined") || ((typeof v.rank) !== "number"))  {
      return false;
   }
   return true;
}
function is$Q6Squarer2B9holdsBombI4rank(v) {
   if(((typeof v.holdsBomb) === "undefined") || ((typeof v.holdsBomb) !== "boolean"))  {
      return false;
   } else if(((typeof v.rank) === "undefined") || ((typeof v.rank) !== "number"))  {
      return false;
   }
   return true;
}
