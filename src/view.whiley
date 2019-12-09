import uint from std::integer
import from_string from js::util
import Document,CanvasRenderingContext2D from w3c::dom
import HTMLCanvasElement, HTMLImageElement from w3c::dom

import model with Board, Square, HiddenSquare, get_square

/**
 * Indices of images
 */
final int BOMB = 0
final int HIDDEN = 1
final int FLAGGED = 2
final int EXPOSED = 3
final int BLANK = 4

/**
 * Wraps together various pieces needed for rendering.
 */
public type State is {
    HTMLImageElement[] images,
    CanvasRenderingContext2D ctx,
    Board board,
    uint gridsize
} where |images| == 13

public method init(Document document, HTMLCanvasElement canvas, Board board, HTMLImageElement[] images) -> State
requires |images| == 13:
    // Access canvas context
    CanvasRenderingContext2D ctx = canvas->getContext(from_string("2d"))
    //
    return {
        images: images,
        ctx: ctx,
        board: board,
        gridsize: 24
    }

/**
 * Determine appropriate image for this square
 */
method determine_image(State state, Square square) -> HTMLImageElement:
    if square is HiddenSquare:
        if square.flagged:
            return state.images[FLAGGED]
        else:
            return state.images[HIDDEN]
    else if square.holdsBomb:
        return state.images[BOMB]
    else:
        return state.images[BLANK + square.rank]

/**
 * Render square at given position to canvas
 */
public method draw_square(State state, uint x, uint y):
    // Read square at given position
    Square square = get_square(state.board,x,y)
    // Convert to view coordinates    
    x,y = (x*state.gridsize), (y*state.gridsize)
    // Determine image for square
    HTMLImageElement img = determine_image(state,square)
    // render square
    state.ctx->drawImage(img,x,y)

/**
 * Render the game board
 */
public method draw_board(State state):
    for x in 0..state.board.width:
        for y in 0..state.board.height:
            // Render square
            draw_square(state,x,y)