declare class Card {
    suit: string;
    value: string;
    color: string;
    aceIsEleven: boolean;
    constructor(suit: string, value: string, color: string, aceIsEleven?: boolean);
    toString(): string;
    toEmoji(): string;
    toValue(): number;
}
declare class Deck {
    suits: string[];
    values: string[];
    deck: Card[];
    discardPile: Card[];
    constructor(hasJokers?: boolean);
    initialize(): void;
    draw(): Card | undefined;
    discard(card: Card): void;
    addCard(card: Card): void;
    slipCard(card: Card): void;
    shuffle(): void;
    shuffleCard(card: Card): void;
    reveal(): Card | undefined;
}
export { Deck, Card };
