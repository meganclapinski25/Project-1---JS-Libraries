class Card {
    suit: string ;
    value: string;
    color: string;
    aceIsEleven: boolean;
    constructor(suit :string ,value: string, color: string, aceIsEleven: boolean = true){
        this.suit = suit;
        this.value = value;
        this.color = color;
        this.aceIsEleven = aceIsEleven;
    }
    toString() : string{
        return `A ${this.color} ${this.value} of ${this.suit}`;
      }

      toValue() : number{
        if (this.value === 'Ace') {
            return this.aceIsEleven ? 11 : 1; 
          } else if (['King', 'Queen', 'Jack'].includes(this.value)) {
            return 10;
          } else {
            return parseInt(this.value, 10);
          }
        }

      toEmoji(): string {
        const emojis:Record<string,string> = {
           Hearts: '♥️',
           Diamonds: '♦️',
           Spades: '♠️',
           Clubs: '♣️'
        }
        return `${this.value} ${emojis[this.suit]}` 
      }
   
    
}


class Deck {
    suits: string[];
    values:string[];
    deck: Card[];
    discardPile: Card[];
    constructor(hasJokers: boolean = false) {
        this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
        this.deck = []
        this.discardPile = []

        this.initialize(hasJokers);
       
        if(hasJokers = true){
            this.deck.push(new Card('null', 'Joker', 'black'));
            this.deck.push(new Card('null', 'Joker', 'black'));
        }
        
    }
    //initialize Deck
    initialize(hasJokers: boolean) : void{
         this.deck = [];
         const colors: Record<string, string> = {
            'Diamonds': 'Red',
            'Hearts': 'Red',
            'Clubs': 'Black',
            'Spades': 'Black',
         };
         for (const suit of this.suits) {
            for (const value of this.values) {
                this.deck.push(new Card(suit, value, colors[suit]));
            }
        } 

    }
    //using shift method .shift()
     draw(): () => Card | undefined {
        return () => this.deck.shift();
    }
    
    discard(): (card: Card) => void {
        return (card: Card) => this.discardPile.push(card);
    }
    
     addCard(card: () => Card | undefined) :(card: Card) => void{
       return(card: Card) => this.deck.unshift(card);
    }

     slipCard () :(card : Card) => void {
       return(card:Card) => this.deck.push(card);
    }
    
    
    
     shuffle(): () => void{
        return() => {
        for(let i = 0; i < this.deck.length; i++){
            const shuffle = Math.floor(Math.random()*(this.deck.length));
            //for loop the deck, swithces current index of card with randomized card 
            const temp = this.deck[i]; 
            this.deck[i] = this.deck[shuffle];
            this.deck[shuffle] =  temp;
        }
        };
    }
     shuffleCard() :(card:Card) => void{
        return() =>{
            const card = this.draw();
            this.addCard(card);
            this.shuffle();
        }
            
        
       
    }
    
     reveal(): () => Card | undefined {
        return () => this.deck[0];
    }
    


}




module.exports.Deck = Deck

module.exports.Card = Card