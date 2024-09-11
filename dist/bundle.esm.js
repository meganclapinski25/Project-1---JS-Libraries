var Card = /** @class */ (function () {
    function Card(suit, value, color, aceIsEleven) {
        if (aceIsEleven === void 0) { aceIsEleven = true; }
        this.suit = suit;
        this.value = value;
        this.color = color;
        this.aceIsEleven = aceIsEleven;
    }
    Card.prototype.toString = function () {
        return "A ".concat(this.color, " ").concat(this.value, " of ").concat(this.suit);
    };
    Card.prototype.toValue = function () {
        if (this.value === 'Ace') {
            return this.aceIsEleven ? 11 : 1;
        }
        else if (['King', 'Queen', 'Jack'].includes(this.value)) {
            return 10;
        }
        else {
            return parseInt(this.value, 10);
        }
    };
    Card.prototype.toEmoji = function () {
        var emojis = {
            Hearts: '♥️',
            Diamonds: '♦️',
            Spades: '♠️',
            Clubs: '♣️',
        };
        return "".concat(this.value, " ").concat(emojis[this.suit]);
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck(hasJokers) {
        if (hasJokers === void 0) { hasJokers = false; }
        this.suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.deck = [];
        this.discardPile = [];
        this.initialize();
        if (hasJokers) {
            this.deck.push(new Card('null', 'Joker', 'Black'));
            this.deck.push(new Card('null', 'Joker', 'Red'));
        }
    }
    // Initialize the deck
    Deck.prototype.initialize = function () {
        var colors = {
            Diamonds: 'Red',
            Hearts: 'Red',
            Clubs: 'Black',
            Spades: 'Black',
        };
        for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
                var value = _c[_b];
                this.deck.push(new Card(suit, value, colors[suit]));
            }
        }
    };
    // Draw a card from the top of the deck
    Deck.prototype.draw = function () {
        return this.deck.shift();
    };
    // Discard a card to the discard pile
    Deck.prototype.discard = function (card) {
        this.discardPile.push(card);
    };
    // Add a card to the top of the deck
    Deck.prototype.addCard = function (card) {
        this.deck.unshift(card);
    };
    // Slip a card to the bottom of the deck
    Deck.prototype.slipCard = function (card) {
        this.deck.push(card);
    };
    // Shuffle the deck using a random algorithm
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.deck.length; i++) {
            var shuffleIndex = Math.floor(Math.random() * this.deck.length);
            var temp = this.deck[i];
            this.deck[i] = this.deck[shuffleIndex];
            this.deck[shuffleIndex] = temp;
        }
    };
    // Shuffle a specific card into the deck
    Deck.prototype.shuffleCard = function (card) {
        this.addCard(card);
        this.shuffle();
    };
    // Reveal the top card of the deck without drawing
    Deck.prototype.reveal = function () {
        return this.deck[0];
    };
    return Deck;
}());
module.exports.Deck = Deck;
module.exports.Card = Card;
//# sourceMappingURL=bundle.esm.js.map
