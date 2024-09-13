class Card {
  suit: string;
  value: string;
  color: string;
  aceIsEleven: boolean;

  constructor(suit: string, value: string, color: string, aceIsEleven: boolean = true) {
      this.suit = suit;
      this.value = value;
      this.color = color;
      this.aceIsEleven = aceIsEleven;
  }

  toString(): string {
      return `A ${this.color} ${this.value} of ${this.suit}`;
  }

  toEmoji(): string {
      const emojis: Record<string, string> = {
          Hearts: '♥️',
          Diamonds: '♦️',
          Spades: '♠️',
          Clubs: '♣️',
      };
      return `${this.value} ${emojis[this.suit]}`;
  }
  toValue(): number {
    if (this.value === 'Ace') {
        return this.aceIsEleven ? 11 : 1;
    } else if (['King', 'Queen', 'Jack'].includes(this.value)) {
        return 10;
    } else {
        return parseInt(this.value, 10);
    }
}
}



class Deck {
    suits: string[];
    values: string[];
    deck: Card[];
    discardPile: Card[];

    constructor(hasJokers: boolean = false) {
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
    initialize(): void {
        const colors: Record<string, string> = {
            Diamonds: 'Red',
            Hearts: 'Red',
            Clubs: 'Black',
            Spades: 'Black',
        };

        for (const suit of this.suits) {
            for (const value of this.values) {
                this.deck.push(new Card(suit, value, colors[suit]));
            }
        }
    }

    // Draw a card from the top of the deck
    draw(): Card | undefined {
        return this.deck.shift();
    }

    // Discard a card to the discard pile
    discard(card: Card): void {
        this.discardPile.push(card);
    }

    // Add a card to the top of the deck
    addCard(card: Card): void {
        this.deck.unshift(card);
    }

    // Slip a card to the bottom of the deck
    slipCard(card: Card): void {
        this.deck.push(card);
    }

    // Shuffle the deck using a random algorithm
    shuffle(): void {
        for (let i = 0; i < this.deck.length; i++) {
            const shuffleIndex = Math.floor(Math.random() * this.deck.length);
            const temp = this.deck[i];
            this.deck[i] = this.deck[shuffleIndex];
            this.deck[shuffleIndex] = temp;
        }
    }

    // Shuffle a specific card into the deck
    shuffleCard(card: Card): void {
        this.addCard(card);
        this.shuffle();
    }

    // Reveal the top card of the deck without drawing
    reveal(): Card | undefined {
        return this.deck[0];
    }
}

export {Deck, Card}