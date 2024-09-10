class Card {
    constructor(suit,value, color, aceIsEleven = false){
        this.suit = suit;
        this.value = value;
        this.color = color;
        this.aceIsEleven = aceIsEleven;
    }
      toString(){
        return `${this.value} of ${this.suit}`;
      }

      toValue(){
        
      }

      toEmoji(){

      }
   
}



class Deck {
    constructor(hasJokers = false) {
        this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
        this.deck = []
        this.discardPile = []

        
        
        this.initialize();
        
        if(hasJokers){
            this.deck.push(new Card(null, 'Joker','black'));
            this.deck.push(new Card(null, 'Joker','black'));
        }
    }
    //initialize Deck
    initialize(){
        this.deck = [];
        const colors ={
            'Diamonds': 'Red',
            'Hearts': 'Red',
            'Clubs': 'Black',
            'Spades': 'Black',

        }
        
        for(let i = 0; i < this.suits.length;  i ++){
            for(let j = 0; j < this.values.length; j++){
                this.deck.push({suit: this.suits[i], value: this.values[j], colors});
            }
            
        }

        
        
    }
    //using shift method .shift()
    draw(){
        Card =  this.deck.shift();
        return Card;
    }
    
    discard(Card){
       Card = this.draw();
       this.discardPile.push(Card)
    }
    
    addCard(Card){
        Card = this.draw(this.discardPile);
        this.deck.unshift(Card);
    }

    slipCard(Card){
        this.deck.push(Card);
    }
    
    
    
    shuffle(){
        for(let i = 0; i < this.deck.legnth; i++){
            shuffle = Math.floor(Math.random()*(this.deck.length));
            //for loop the deck, swithces current index of card with randomized card 
            temp = this.deck[i]; 
            this.deck[i] = this.deck[shuffle];
            this.deck[shuffle] =  temp;
    
        }
    }

    shuffleCard(){
        Card = this.draw(this.discardPile);
        this.addCard(Card);
        this.shuffle();
    }
    
    reveal(){
        return this.deck[0];
    }


}



module.exports.Deck = Deck

module.exports.Card = Card