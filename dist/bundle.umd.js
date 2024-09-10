(function (factory) {
   typeof define === 'function' && define.amd ? define(factory) :
   factory();
})((function () { 'use strict';

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
               Clubs: '♣️'
           };
           return "".concat(this.value, " ").concat(emojis[this.suit]);
       };
       return Card;
   }());
   var Deck = /** @class */ (function () {
       function Deck(hasJokers) {
           if (hasJokers === void 0) { hasJokers = false; }
           this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
           this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
           this.deck = [];
           this.discardPile = [];
           this.initialize(hasJokers);
           if (hasJokers = true) {
               this.deck.push(new Card('null', 'Joker', 'black'));
               this.deck.push(new Card('null', 'Joker', 'black'));
           }
       }
       //initialize Deck
       Deck.prototype.initialize = function (hasJokers) {
           this.deck = [];
           var colors = {
               'Diamonds': 'Red',
               'Hearts': 'Red',
               'Clubs': 'Black',
               'Spades': 'Black',
           };
           for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
               var suit = _a[_i];
               for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
                   var value = _c[_b];
                   this.deck.push(new Card(suit, value, colors[suit]));
               }
           }
       };
       //using shift method .shift()
       Deck.prototype.draw = function () {
           var _this = this;
           return function () { return _this.deck.shift(); };
       };
       Deck.prototype.discard = function () {
           var _this = this;
           return function (card) { return _this.discardPile.push(card); };
       };
       Deck.prototype.addCard = function (card) {
           var _this = this;
           return function (card) { return _this.deck.unshift(card); };
       };
       Deck.prototype.slipCard = function () {
           var _this = this;
           return function (card) { return _this.deck.push(card); };
       };
       Deck.prototype.shuffle = function () {
           var _this = this;
           return function () {
               for (var i = 0; i < _this.deck.length; i++) {
                   var shuffle = Math.floor(Math.random() * (_this.deck.length));
                   //for loop the deck, swithces current index of card with randomized card 
                   var temp = _this.deck[i];
                   _this.deck[i] = _this.deck[shuffle];
                   _this.deck[shuffle] = temp;
               }
           };
       };
       Deck.prototype.shuffleCard = function () {
           var _this = this;
           return function () {
               var card = _this.draw();
               _this.addCard(card);
               _this.shuffle();
           };
       };
       Deck.prototype.reveal = function () {
           var _this = this;
           return function () { return _this.deck[0]; };
       };
       return Deck;
   }());
   module.exports.Deck = Deck;
   module.exports.Card = Card;

}));
//# sourceMappingURL=bundle.umd.js.map
