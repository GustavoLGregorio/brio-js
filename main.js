import { GameScreen, GameObject } from "./game_classes.js";

const GS = new GameScreen(300, 200, "mainScreen");
GS.appendTo(document.body);

GS.setStyle("background", "lightgreen");
GS.setStyle("borderRadius", "8px");

const cat = new GameObject(0, 0, "./gato01.png", 128, 128);
const twoBe = new GameObject(128, 0, "./2b.png", 128, 128);

GS.instantiate(cat);
GS.instantiate(twoBe);
