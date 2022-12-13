const SUITS = ["♥", "♦", "♠", "♣"]
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]

export default class Deck{//needs 2 b flexible enough for a full deck of cards and someone's hand in cards
    constructor(cards){
        this.cards = []//is an empty array
    }

    get numberOfCards(){
        return this.cards.length
    }

    shuffle(){//shuffles deck
        for (let i = this.numberOfCards - 1; i > 0; i--){
             const newIndex = Math.floor(Math.random() * (i + 1))
             const oldValue = this.cards[newIndex]
             this.cards[newIndex] = this.cards[i]
             this.cards[i] = oldValue 
        }
        //this.cards.sort((a, b) => Math.random() - .5) 
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

function freshDeck(){//makes 
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}