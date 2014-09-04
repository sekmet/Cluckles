	/**
	 * Allows modifications of the Jumbotron component styling in Bootstrap.
	 * 
	 * @class Jumbotron
	 * @extends ThemeModifier
	 * 
	 * @param {ThemeEditor} editor instance which manages the less modifications.
	 * 
	 * @property {object} padding The @jumbotron-padding variable which sets the Padding of the Jumbotron component.
	 * @property {object} bg The @jumbotron-bg variable which sets the Background of the Jumbotron component.
	 * @property {object} headingColor The @jumbotron-heading-color variable which sets the Heading of the Jumbotron.
	 * @property {object} color The @jumbotron-color variable which sets the color of the Jumbotron component.
	 * 
	 * @returns {Jumbotron}
	 */
	var Jumbotron = function (editor) {
		ThemeModifier.call(this, editor); // Call parent constructor

        this.subscriberDataAttribute = 'data-cluckles-jumbotron';

        // Configure the Modifiers
        this.padding = {
            variable:           '@jumbotron-padding',
            subscribeProperty:  'padding',
            changeFn:           this.setPadding.bind(this),
            subscribers:        [],
            _value: null
        };
		this.bg = {
			variable:           '@jumbotron-bg',
            subscribeProperty:  'bg',
            changeFn:           this.setBackground.bind(this),
            subscribers:        [],
			_value: null
		};
		this.headingColor = {
			variable:           '@jumbotron-heading-color',
            subscribeProperty:  'heading-color',
            changeFn:           this.setHeadingColor.bind(this),
            subscribers:        [],
			_value: null
		};
		this.color = {
			variable:           '@jumbotron-color',
            subscribeProperty:  'color',
            changeFn:           this.setColor.bind(this),
            subscribers:        [],
			_value: null
		};

        Object.defineProperty(this.padding, 'value', {
            get: function () { return this._value; },
            set: function (val) {
                this._value = val + 'px';
                editor.queueModifications();

                this.subscribers.forEach(function (subscriber) {
                    subscriber.value = val;
                });
            } 
        });

        // Configure the modifiers so they can be extracted easier
        this.modifiers = {
            padding:        this.padding,
            bg:             this.bg,
            headingColor:   this.headingColor,
            color:          this.color
        };

        this.setupDataBinding();
	};
	
	// Inherit from parent Prototype and preserve constructor
	Jumbotron.prototype = Object.create(ThemeModifier.prototype);
	Jumbotron.constructor = Jumbotron;

	/**
	 * Gets the Padding of the Jumbotron Component.
	 * 
	 * @returns {string}
	 */
	Jumbotron.prototype.getPadding = function () {
		return this.modifiers.padding.value;
	};

	/**
	 * Sets the Padding of the Jumbotron Component.
	 * 
	 * @param {string} color The color to set the Padding.
	 * 
	 * @returns {undefined}
	 */
	Jumbotron.prototype.setPadding = function (color) {
		this.modifiers.padding.value = color;
	};

	/**
	 * Gets the Background of the Jumbotron Component.
	 * 
	 * @returns {string}
	 */
	Jumbotron.prototype.getBackground = function () {
		return this.modifiers.bg.value;
	};

	/**
	 * Sets the Background of the Jumbotron Component.
	 * 
	 * @param {string} color The color to set the Background.
	 * 
	 * @returns {undefined}
	 */
	Jumbotron.prototype.setBackground = function (color) {
		this.modifiers.bg.value = color;
	};

	/**
	 * Gets the Background of the Jumbotron Component.
	 * 
	 * @returns {string}
	 */
	Jumbotron.prototype.getColor = function () {
		return this.modifiers.color.value;
	};

	/**
	 * Sets the Text color of the Jumbotron Component.
	 * 
	 * @param {string} color The color to set the text of the Jumbotron Component.
	 * 
	 * @returns {undefined}
	 */
	Jumbotron.prototype.setColor = function (color) {
		this.modifiers.color.value = color;
	};

	/**
	 * Gets the Heading color of the Jumbotron Component.
	 * 
	 * @returns {string}
	 */
	Jumbotron.prototype.getHeadingColor = function () {
		return this.modifiers.headingColor.value;
	};

	/**
	 * Sets the Heading color of the Jumbotron Component.
	 * 
	 * @param {string} color The color to set the Headings.
	 * 
	 * @returns {undefined}
	 */
	Jumbotron.prototype.setHeadingColor = function (color) {
		this.modifiers.headingColor.value = color;
	};