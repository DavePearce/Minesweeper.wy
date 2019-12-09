import uint from std::integer
import from_string from js::util
import random from js::math
import alert from w3c::dom
import Document, CanvasRenderingContext2D from w3c::dom
import Element,HTMLCanvasElement, HTMLImageElement, MouseEvent from w3c::dom

import model
import view

/**
 * Add a given number of bombs to the board.
 */
method add_random_bombs(model::Board board, uint n) -> model::Board:
    int remaining = |board.squares|   
    // Use Knuth's algorithm S
    for x in 0..board.width:
        for y in 0..board.height:
            // Flip a coin (so-to-speak)
            if random(remaining) < n:
                // create bomb square
                model::Square s = model::HiddenSquare(true,false)
                // Update board
                board = model::set_square(board,x,y,s)
                // Reduce number of bombs to place
                n = n - 1
            // Reduce remaining options
            remaining = remaining - 1
    // return updated board
    return board

/**
 * Handle a mouse event on the canvas
 */
method onclick_handler(MouseEvent e, &view::State state):
    // Convert from view to world coordinates
    int x = e->offsetX / state->gridsize
    int y = e->offsetY / state->gridsize
    // Update board
    if e->shiftKey:
        state->board = model::flag_square(state->board,x,y)
    else:
        state->board = model::expose_square(state->board,x,y)
    // Render initial board
    view::draw_board(*state)
    // Finally determine game status
    (bool gameOver, bool winner) = model::is_gameover(state->board)
    // Check whether game over
    if gameOver:
        // Yes, but win or lose?
        if winner:
            alert("Well done --- You Found all the Mines!")
        else:
            alert("Game Over --- You Lost!")
    // Done

/**
 * Create a new game of Minesweeper
 */
public export method main(int width, int height, int bombs, Document document, HTMLCanvasElement canvas, HTMLImageElement[] images)
// Requires at least 9 images
requires |images| == 13:
    // NOTE: following should not be required!
    Element c = document->getElementById(from_string("myCanvas"))
    // Create a standard sized board
    model::Board board = model::Board(width,height)
    // Add bombs
    board = add_random_bombs(board,bombs)
    // Initialise the view state
    &view::State state = new view::init(document,canvas,board,images)
    // Render initial board
    view::draw_board(*state)
    // Configure mouse click listener
    c->addEventListener(from_string("click"),&(MouseEvent e -> onclick_handler(e,state)))
    