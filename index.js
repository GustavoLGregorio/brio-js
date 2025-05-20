import { GameScreen, Player } from "./game_classes.js";

const game_screen = new GameScreen();
const player = new Player();

const window_w = document.body.offsetWidth;
const window_h = window_w / 3;

console.log(window_h, window_w);

if (window_h !== undefined && window_w !== undefined) {
	game_screen.width = window_w;
	game_screen.height = window_h;
}
