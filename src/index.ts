// class Card {
//     suit: string | null ;
//     value: string;
//     color: string;
//     aceIsEleven: boolean;
//     constructor(suit :string |null ,value: string, color: string, aceIsEleven: boolean = false){
//         this.suit = suit;
//         this.value = value;
//         this.color = color;
//         this.aceIsEleven = aceIsEleven;
//     }
    
// }


// class Deck {
//     suits: string[];
//     values:string[];
//     deck: Card[];
//     discardPile: Card[];
//     constructor(hasJokers: boolean = false) {
//         this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
//         this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
//         this.deck = []
//         this.discardPile = []

//         this.initialize(hasJokers);
       
//         if(hasJokers = true){
//             this.deck.push(new Card(null, 'Joker', 'black'));
//             this.deck.push(new Card(null, 'Joker', 'black'));
//         }
        
//     }
//     //initialize Deck
//     initialize(hasJokers: boolean){
//          this.deck = [];
//         for(let i = 0; i < this.suits.length;  i ++){
//             for(let j = 0; j < this.values.length; j++){
//                 this.deck.push(new Card(this.suits[i], this.values[j]));
//             }
//         }
//     }
//     //using shift method .shift()
//     draw(){
//         const card = this.deck.shift();
//         return card
//     }
    
//     discard(card: Card){
//        this.discardPile.push(card)
//     }
    
//     addCard(card: Card){
//         this.deck.unshift(card);
//     }

//     slipCard(card : Card){
//         this.deck.push(card);
//     }
    
    
    
//     shuffle(){
//         for(let i = 0; i < this.deck.length; i++){
//             const shuffle = Math.floor(Math.random()*(this.deck.length));
//             //for loop the deck, swithces current index of card with randomized card 
//             const temp = this.deck[i]; 
//             this.deck[i] = this.deck[shuffle];
//             this.deck[shuffle] =  temp;
    
//         }
//     }
    


// }




// module.exports.Deck = Deck

// module.exports.Card = Card