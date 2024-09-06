const {Deck, Card} = require('./index');


test('First Test',() =>  {
   const deck = new Deck()
    expect(deck.deck.length).toBe(52)
})


test('Draw Test', () =>{
    const deck = new Deck()
    deck.draw();
    expect(deck.deck.length).toBe(51)
})

test('Discard Test', () => {
    const deck = new Deck()
    deck.discard();
    expect(deck.discardPile.length).toBe(1)
})

// don't know if this is testing the right thing ( test placement)
test('Add Test', () =>{
    const deck = new Deck()
    
    deck.addCard();
    expect(deck.deck.length).toBe(52)
    expect(deck.discardPile.length).toBe(0)
    
})
//check test again after finishing shuffle (check placement)
test('Slip Test', () =>{
    const deck = new Deck()
    
    deck.slipCard();
    expect(deck.deck.length).toBe(52)
    expect(deck.discardPile.length).toBe(0)
    
})

test('Has Jokers', () =>{
    const deck = new Deck(true)
    expect(deck.deck.length).toBe(54)
})


/*test('Shuffle Test', () =>{
    const deck = new Deck()
    const nonShuffled = [deck.deck]
    deck.shuffle();
    for(i = 0; i < nonShuffled.length; i ++){
        if(nonShuffled[i].value != deck.deck[i].value || nonShuffled[i].suit != deck.deck[i].suit){
            
        }
    }
    
})*/


