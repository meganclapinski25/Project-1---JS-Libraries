const {Deck, Card} = require('../src/index.js');

//wokring (with no jokers added )
test('First Test',() =>  {
   const deck = new Deck()
    expect(deck.deck.length).toBe(52)
})
//working (with jokers added)
test('Joker Test', () =>{
    const deck = new Deck(true)
    expect(deck.deck.length).toBe(54)
})

//working
test('Draw Test', () =>{
    const deck = new Deck()
    deck.draw();
    expect(deck.deck.length).toBe(51)
})
//working
test('Discard Test', () => {
    const deck = new Deck()
    deck.discard();
    expect(deck.discardPile.length).toBe(1)
})

// don't know if this is testing the right thing ( test placement) working 
test('Add Test', () =>{
    const deck = new Deck()
    
    deck.addCard();
    expect(deck.deck.length).toBe(52)
    
    
})
//check test again after finishing shuffle (check placement)
test('Slip Test', () =>{
    const deck = new Deck()
    const tempCard = deck.draw();

    deck.slipCard(tempCard);
    expect(deck.deck[deck.deck.length - 1]).toEqual(tempCard);
    
    
})

test('Shuffled Card Test', ()  => {
    const deck = new Deck()
    const newCard = deck.draw();
    deck.shuffleCard(newCard)
    expect(deck.deck[0]).not.toEqual(newCard);
})

test('Shuffled Deck', () =>{
    const deck = new Deck();
    const shuffledDeck = new Deck();
    shuffledDeck.shuffle();
    expect(deck.deck).not.toEqual(shuffledDeck)
})

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