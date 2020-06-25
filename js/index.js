const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  function toggle(element, classes){
    classes.forEach(className => element.classList.toggle(className))
  }
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      toggle(card.children[0],["back", "front"]);
      toggle(card.children[1],["back", "front"]);
      
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2){
        const firstElement = memoryGame.pickedCards[0];
        const secondElement = memoryGame.pickedCards[1];
        const firstElementName = firstElement.getAttribute("data-card-name");
        const secondElementName = secondElement.getAttribute("data-card-name");

      //TODO Now when you have cards flipping from back to front and vice versa, you have to make sure you call .checkIfPair(card1, card2) method. If the two cards are the same, they should get class blocked, which is going to keep them flipped so we can see images.

      let checked = memoryGame.checkIfPair(firstElementName, secondElementName); 
      if (checked === true){
        firstElement.classList.add('blocked');
        secondElement.classList.add ('class', 'blocked');
      }  
    }

      console.log(`Card clicked: ${card}`);
    });
  });
});
