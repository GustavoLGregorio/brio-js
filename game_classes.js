/** @class {} */
export class GameScreen extends HTMLElement {
	/** @type {number} width */
	#width;
	/** @type {number} height */
	#height;
	/** @type {HTMLElement} parentContainer */
	parentContainer;

	constructor(parentContainer = document.body) {
		super();
		this.parentContainer = parentContainer;
		this.parentContainer.appendChild(this);
		this.style.display = "block";
		this.style.backgroundColor = "red";
		this.style.display = "block";
	}

	/**
	 * Set and Get the GameScreen width size
	 * @param {number} width Set a width size to the GameScreen instance
	 * @returns {number} width of the GameScreen
	 * @example
	 * game_screen.width = 1920 // set width to 1920
	 * game_screen.width // returns width as 1920
	 **/
	set width(width) {
		this.#width = width;
		this.style.width = width + "px";
	}
	get width() {
		return this.#width;
	}

	/**
	 * Set and Get the GameScreen height size
	 * @param {number} width Set a height size to the GameScreen instance
	 * @returns {number} height of the GameScreen
	 * @example
	 * game_screen.height = 1920 // set height to 1920
	 * game_screen.height // returns height as 1920
	 **/
	set height(width) {
		this.#height = width;
		this.style.height = this.height + "px";
	}
	get height() {
		return this.#height;
	}

	// methods

	connectedCallback() {
		console.log("Elemento adicionado a página");
	}

	setAttribute(attribute, value) {
		this.setAttribute(attribute, value);
	}

	/**
	 * Set a style into the GameScreen object
	 * @param {CSSStyleRule} styleAttribute
	 * @param {CSSStyleValue} value
	 * @example GS.setStyle("position", "absolute")
	 * // GS.style.position = "absolute"
	 * */
	setStyle(styleAttribute, value) {
		const cannotUse = ["width", "heigth", "backgroundColor", "background"];
		if (cannotUse.includes(styleAttribute)) throw Error("Attribute can't be used");
		this.style[styleAttribute] = value;
	}
}

customElements.define("game-screen", GameScreen);

export class Player {
	/** @type {number} pos_x */
	#pos_x;
	/** @type {number} pos_y */
	#pos_y;
	/** @type {string} spr */
	#spr;

	/**
	/* @param {number} pos_x
	/* @param {number} pos_y
	/* @param {string} spr
	**/
	constructor(pos_x, pos_y, spr) {
		this.#pos_x = pos_x;
		this.#pos_y = pos_y;
		this.#spr = spr;
	}

	get sprite() {
		return this.#spr;
	}
	get pos_x() {
		return this.#pos_x;
	}
	get pos_y() {
		return this.#pos_y;
	}
}
