'use strict';
function main$add_random_bombs$Q5model5BoardQ4uint$Q5model5Board(board, n) {
   let remaining = board.squares.length;
   for(let x = 0;x < board.width;x = x + 1) {
      for(let y = 0;y < board.height;y = y + 1) {
         if(js$math$random(remaining) < n)  {
            let s = model$HiddenSquare(true, false);
             {
               const $0 = model$set_square(Wy.copy(board), x, y, Wy.copy(s));
               board = $0;
            }
             {
               const $1 = n - 1;
               n = $1;
            }
         }
          {
            const $2 = remaining - 1;
            remaining = $2;
         }
      }
   }
   return Wy.copy(board);
}
function main$onclick_handler$Q10MouseEventqQ4view5StateQ6Window$V(e, state, window) {
   let x = Math.floor(e.offsetX / state.$ref.gridsize);
   let y = Math.floor(e.offsetY / state.$ref.gridsize);
   if(e.shiftKey)  {
       {
         const $3 = model$flag_square(state.$ref.board, x, y);
         state.$ref.board = $3;
      }
   } else  {
       {
         const $4 = model$expose_square(state.$ref.board, x, y);
         state.$ref.board = $4;
      }
   }
   view$draw_board$Q5State$V(state.$ref);
   let [gameOver, winner] = model$is_gameover(state.$ref.board);
   if(gameOver)  {
      if(winner)  {
         window.alert("Well done --- You Found all the Mines!");
      } else  {
         window.alert("Game Over --- You Lost!");
      }
   }
}
function main$main(width, height, bombs, window, canvas, images) {
   let document = window.document;
   let c = document.getElementById("myCanvas");
   let board = model$Board(width, height);
    {
      const $5 = main$add_random_bombs$Q5model5BoardQ4uint$Q5model5Board(Wy.copy(board), bombs);
      board = $5;
   }
   let state = new Wy.Ref(view$init$Q8DocumentQ17HTMLCanvasElementQ5BoardaQ16HTMLImageElement$Q5State(document, canvas, Wy.copy(board), Wy.copy(images)));
   view$draw_board$Q5State$V(state.$ref);
   c.addEventListener("click", function(window, state) {
      return function(e) {
         return main$onclick_handler$Q10MouseEventqQ4view5StateQ6Window$V(e, state, window);
      };
   }(window, state));
}
function model$ExposedSquare$type($) {
   return ($.rank >= 0) && ($.rank <= 8);
}
function model$ExposedSquare(rank, bomb) {
   return new Wy.Record({rank: rank, holdsBomb: bomb});
}
function model$HiddenSquare(bomb, flag) {
   return new Wy.Record({holdsBomb: bomb, flagged: flag});
}
function model$Board$type($) {
   return ($.width * $.height) === $.squares.length;
}
function model$Board(width, height) {
   Wy.assert((width * height) >= 0);
   let squares = Wy.array(model$HiddenSquare(false, false), width * height);
   return new Wy.Record({squares: Wy.copy(squares), width: width, height: height});
}
function model$get_square(b, col, row) {
   let rowOffset = b.width * row;
   Wy.assert(rowOffset >= 0);
   Wy.assert(rowOffset <= (b.squares.length - b.width));
   return Wy.copy(b.squares[rowOffset + col]);
}
function model$set_square(b, col, row, sq) {
   let rowOffset = b.width * row;
   Wy.assert(rowOffset >= 0);
   Wy.assert(rowOffset <= (b.squares.length - b.width));
   b.squares[rowOffset + col] = Wy.copy(sq);
   return Wy.copy(b);
}
function model$flag_square(b, col, row) {
   let sq = model$get_square(Wy.copy(b), col, row);
   if(is$Q6Squarer2B9holdsBombB7flagged(sq))  {
       {
         const $6 = !sq.flagged;
         sq.flagged = $6;
      }
       {
         const $7 = model$set_square(Wy.copy(b), col, row, Wy.copy(sq));
         b = $7;
      }
   }
   return Wy.copy(b);
}
function model$determineRank$Q5BoardQ4uintQ4uint$Q4uint(b, col, row) {
   let rank = 0;
   for(let r = std$math$max$II$I(0, row - 1);r < std$math$min$II$I(b.height, row + 2);r = r + 1) {
      for(let c = std$math$max$II$I(0, col - 1);c < std$math$min$II$I(b.width, col + 2);c = c + 1) {
         let sq = model$get_square(Wy.copy(b), c, r);
         if(model$holds_bomb$Q6Square$B(Wy.copy(sq)))  {
             {
               const $8 = rank + 1;
               rank = $8;
            }
         }
      }
   }
   return rank;
}
function model$expose_square(b, col, row) {
   let sq = model$get_square(Wy.copy(b), col, row);
   let rank = model$determineRank$Q5BoardQ4uintQ4uint$Q4uint(Wy.copy(b), col, row);
   if(is$Q6Squarer2B9holdsBombB7flagged(sq) && (!sq.flagged))  {
       {
         const $9 = model$ExposedSquare(rank, sq.holdsBomb);
         sq = $9;
      }
       {
         const $10 = model$set_square(Wy.copy(b), col, row, Wy.copy(sq));
         b = $10;
      }
      if(rank === 0)  {
         return model$expose_neighbours$Q5BoardQ4uintQ4uint$Q5Board(Wy.copy(b), col, row);
      }
   }
   return Wy.copy(b);
}
function model$expose_neighbours$Q5BoardQ4uintQ4uint$Q5Board(b, col, row) {
   for(let r = std$math$max$II$I(0, row - 1);r < std$math$min$II$I(b.height, row + 2);r = r + 1) {
      for(let c = std$math$max$II$I(0, col - 1);c < std$math$min$II$I(b.width, col + 2);c = c + 1) {
          {
            const $11 = model$expose_square(Wy.copy(b), c, r);
            b = $11;
         }
      }
   }
   return Wy.copy(b);
}
function model$is_gameover(b) {
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
function model$holds_bomb$Q6Square$B(sq) {
   if(is$Q6SquareQ13ExposedSquare(sq))  {
      return sq.holdsBomb;
   } else  {
      return sq.holdsBomb;
   }
}
const view$BOMB$static = 0;
const view$HIDDEN$static = 1;
const view$FLAGGED$static = 2;
const view$EXPOSED$static = 3;
const view$BLANK$static = 4;
function view$State$type($) {
   return $.images.length === 13;
}
function view$init$Q8DocumentQ17HTMLCanvasElementQ5BoardaQ16HTMLImageElement$Q5State(document, canvas, board, images) {
   let ctx = canvas.getContext("2d");
   return new Wy.Record({images: Wy.copy(images), ctx: ctx, board: Wy.copy(board), gridsize: 24});
}
function view$determine_image$Q5StateQ6Square$Q16HTMLImageElement(state, square) {
   if(is$Q6Squarer2B9holdsBombB7flagged(square))  {
      if(square.flagged)  {
         return state.images[view$FLAGGED$static];
      } else  {
         return state.images[view$HIDDEN$static];
      }
   } else  {
      if(square.holdsBomb)  {
         return state.images[view$BOMB$static];
      } else  {
         return state.images[view$BLANK$static + square.rank];
      }
   }
}
function view$draw_square$Q5StateQ4uintQ4uint$V(state, x, y) {
   let square = model$get_square(Wy.copy(state.board), x, y);
    {
      const $12 = x * state.gridsize;
      const $13 = y * state.gridsize;
      x = $12;
      y = $13;
   }
   let img = view$determine_image$Q5StateQ6Square$Q16HTMLImageElement(Wy.copy(state), Wy.copy(square));
   state.ctx.drawImage(img, x, y);
}
function view$draw_board$Q5State$V(state) {
   for(let x = 0;x < state.board.width;x = x + 1) {
      for(let y = 0;y < state.board.height;y = y + 1) {
         view$draw_square$Q5StateQ4uintQ4uint$V(Wy.copy(state), x, y);
      }
   }
}
function is$u2Q13ExposedSquareQ12HiddenSquareQ13ExposedSquare(v) {
   return is$u2Q13ExposedSquareQ12HiddenSquarer2B9holdsBombI4rank(v) && model$ExposedSquare$type(v);
}
function is$Q6SquareQ13ExposedSquare(v) {
   return is$Q6Squarer2B9holdsBombI4rank(v) && model$ExposedSquare$type(v);
}
function is$Q6Squarer2B9holdsBombB7flagged(v) {
   if(((typeof v.holdsBomb) === "undefined") || ((typeof v.holdsBomb) !== "boolean"))  {
      return false;
   } else if(((typeof v.flagged) === "undefined") || ((typeof v.flagged) !== "boolean"))  {
      return false;
   }
   return true;
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
