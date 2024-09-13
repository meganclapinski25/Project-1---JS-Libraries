// import Card , Deck 
//import { Deck, Card } from '../dist/bundle.esm.js';
const {Deck, Card} = require ('../dist/bundle.umd.js')


// working w/ index.js 
test('First Test',() =>  {
   const deck = new Deck()
    expect(deck.deck.length).toBe(52)
})
// working w/ index.js 
test('Joker Test', () =>{
    const deck = new Deck(true)
    expect(deck.deck.length).toBe(54)
})

// working w/ index.js 
test('Draw Test', () =>{
    const deck = new Deck()
    deck.draw();
    expect(deck.deck.length).toBe(51)
})
// working w/ index.js 
test('Discard Test', () => {
    const deck = new Deck()
    deck.discard();
    expect(deck.discardPile.length).toBe(1)
})

// working w/ index.js 
test('Add Test', () =>{
    const deck = new Deck()
    
    deck.addCard();
    expect(deck.deck.length).toBe(53)
    
    
})
// working w/ index.js 
test('Slip Test', () =>{
    const deck = new Deck()
    const tempCard = deck.draw();

    deck.slipCard(tempCard);
    expect(deck.deck[deck.deck.length - 1]).toEqual(tempCard);
    
    
})
// working w/ index.js 
test('Shuffled Card Test', ()  => {
    const deck = new Deck()
    const newCard = deck.draw();
    deck.shuffleCard(newCard)
    expect(deck.deck[0]).not.toEqual(newCard);
})
// working w/ index.js 
test('Shuffled Deck', () =>{
    const deck = new Deck();
    const tempCard = deck.draw();
    deck.shuffleCard(tempCard);

    expect(deck.deck).toContain(tempCard);



})
// working w/ index.js 
test('Reveal', () =>{
    const deck  = new Deck ()
    const tempDeck = new Deck()
    const revealCard = tempDeck.draw();
    expect(deck.reveal()).toEqual(revealCard);
    
})

test('toValue test', () =>{
    const ace = new Card ('Hearts', 'Ace', 'Black', false);
    expect(ace.toValue()).toBe(1); 
 })
 
 test('toString test', ()=>{
     const card = new Card ('Spades', '5', 'Black')
     expected = "A Black 5 of Spades";
     expect(card.toString()).toBe(expected) 
 })
 test('toValue test King', () =>{
     const ace = new Card ('Hearts', 'King', 'Black', false);
     expect(ace.toValue()).toBe(10); 
  })
 
  test('toEmoji test', ()=>{
     const card = new Card ('Hearts', 'Queen', 'Black', false);
     emojiTest = 'Queen ♥️'
     expect(card.toEmoji()).toEqual(emojiTest)
  })