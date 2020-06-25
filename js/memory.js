class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    let arrayLength = this.cards.length;

    while (arrayLength.length >0 ){
      arrayLength--;
      let currentCard = this.card[arrayLength];
      let randomIdx = Math.floor(Math.random()*array.length);
      this.cards[array.length] = this.cards[randomIdx];
      this.cards[randomIdx] = currentCard;
    } this.shuffleCards();
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 == card2){
      this.pairsGuessed ++;
      return true;
    }return false;
  }


  isFinished() {
    if (this.pairsGuessed = (this.cards.arrayLength/2)){
    }
  
  }}
