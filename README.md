# Minesweeper.wy

A simple implementation of classic game
[Minesweeper](https://en.wikipedia.org/wiki/Microsoft_Minesweeper)
written in [Whiley](http://whiley.org) with a minimal amount of native
JavaScript.  This illustrates the use of
[preconditions](https://en.wikipedia.org/wiki/Precondition) and
[postconditions](https://en.wikipedia.org/wiki/Postcondition) in
Whiley, and employs a fairly straightforward division between
[model](https://github.com/DavePearce/Minesweeper.wy/blob/master/src/model.whiley)
and
[view](https://github.com/DavePearce/Minesweeper.wy/blob/master/src/view.whiley).
The code is written almost entirely in Whiley which is then compiled
to JavaScript for execution in the browser.  You can play a live demo
of the game [here](https://davepearce.github.io/Minesweeper.wy/).

![Alt text](assets/screenshot.png?raw=true "Screenshot")

