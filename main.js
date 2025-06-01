import { GameScreen, GameObject } from "./game_classes.js";

const spd = 5;
const GS = new GameScreen(300, 200, "mainScreen");
GS.appendTo(document.body);

GS.setStyle("background", "lightgreen");
GS.setStyle("borderRadius", "8px");

GS.load(() => {
	const player = new GameObject("player", 90, 40, "./gato.png", 68 * 2, 56 * 2);

	player.setActions({
		onKeyDown: {
			ArrowDown: () => (player.posY += spd),
			ArrowUp: () => (player.posY -= spd),
			ArrowLeft: () => (player.posX -= spd),
			ArrowRight: () => (player.posX += spd),
		},
	});

	player.scale = -1;

	return [player];
});

// GS.update((gameObjects) => {
// 	const player = gameObjects.get("player");
// });
