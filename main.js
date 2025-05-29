import { GameScreen, GameObject } from "./game_classes.js";

const spd = 10;
const GS = new GameScreen(300, 200, "mainScreen");
GS.appendTo(document.body);

GS.setStyle("background", "lightgreen");
GS.setStyle("borderRadius", "8px");

GS.load(() => {
	const player = new GameObject("player", 0, 0, "./gato01.png", 128, 128);
	player.setActions({
		onKeyDown: {
			ArrowDown: () => (player.posY += spd),
			ArrowUp: () => (player.posY -= spd * 20),
			ArrowLeft: () => (player.posX -= spd),
			ArrowRight: () => (player.posX += spd),
		},
	});

	return [player];
});

GS.update((gameObjects) => {
	const player = gameObjects.get("player");

	player.posY += 5;
});
