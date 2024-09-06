var Deck = /** @class */ (function () {
    function Deck(hasJokers) {
        if (hasJokers === void 0) { hasJokers = false; }
        this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
        this.deck = [];
        this.discardPile = [];
        this.initialize(hasJokers);
    }
    //initialize Deck
    Deck.prototype.initialize = function (hasJokers) {
        this.deck = [];
        for (var i = 0; i < this.suits.length; i++) {
            for (var j = 0; j < this.values.length; j++) {
                this.deck.push({ suit: this.suits[i], value: this.values[j] });
            }
        }
        if (hasJokers) {
            this.cards.push(new Card(null, 'Joker'));
            this.cards.push(new Card(null, 'Joker'));
        }
    };
    //using shift method .shift()
    Deck.prototype.draw = function () {
        var card = this.deck.shift();
        return card;
    };
    Deck.prototype.discard = function (card) {
        card = this.draw();
        this.discardPile.push(card);
    };
    Deck.prototype.addCard = function (card) {
        card = this.draw(this.discardPile);
        this.deck.unshift(card);
    };
    Deck.prototype.slipCard = function () {
        card = this.draw(this.discardPile);
        this.deck.push(card);
    };
    Deck.prototype.shuffle = function () {
        for (i = 0; i < deck.legnth; i++) {
            shuffle = Math.floor(Math.random() * (deck.length));
            //for loop the deck, swithces current index of card with randomized card 
            temp = deck[i];
            deck[i] = deck[shuffle];
            deck[shuffle] = temp;
        }
    };
    return Deck;
}());
var Card = /** @class */ (function () {
    function Card(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    Card.prototype.initialize = function () {
    };
    return Card;
}());
module.exports.Deck = Deck;
module.exports.Card = Card;
