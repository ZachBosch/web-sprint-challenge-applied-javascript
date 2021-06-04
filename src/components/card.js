import axios from 'axios'
const Card = (article) => {
  // const hideInstructions = () => {
  //   // TASK 5
  //   // ---------------------
  //   // Implement this function, which should return the markup you see below.
  //   // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  //   // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  //   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //   // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //   //
  //   // <div class="card">
  //   //   <div class="headline">{ headline }</div>
  //   //   <div class="author">
  //   //     <div class="img-container">
  //   //       <img src={ authorPhoto }>
  //   //     </div>
  //   //     <span>By { authorName }</span>
  //   //   </div>
  //   // </div>
  //   //
  // }
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  
    ////////////// Create card elements /////////////////
    const cardHeadline = document.createElement('div')
    const cardAuth = document.createElement('div')
    const imgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const authName = document.createElement('span')

    ///////////// Assign classes, text, attrs ///////////
    cardHeadline.classList.add('headline')
    cardHeadline.textContent = article.headline
    cardAuth.classList.add('author')
    imgContainer.classList.add('img-container')
    cardImg.src = article.authorPhoto
    authName.textContent = 'By' + article.authorName

    //////////////////// Hierarchy /////////////////////
    cardDiv.appendChild(cardHeadline)
    cardDiv.appendChild(cardAuth)
    cardAuth.appendChild(imgContainer)
    cardAuth.appendChild(authName)
    imgContainer.appendChild(cardImg)
  
    cardDiv.addEventListener('click', () => {
      console.log('headline', cardHeadline)
    })
  return cardDiv
}

const cardAppender = (selector) => {
  const cardDiv = document.querySelector(selector)
  
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const info = res.data.articles
    console.log('info', info)
    
      info.bootstrap.forEach(item => {
      const newCard = Card(item)
      cardDiv.appendChild(newCard)
    })
    
      info.javascript.forEach(item => {
      const newCard = Card(item)
      cardDiv.appendChild(newCard)
    })
    
      info.jquery.forEach(item => {
      const newCard = Card(item)
      cardDiv.appendChild(newCard)
    })
    
      info.node.forEach(item => {
      const newCard = Card(item)
      cardDiv.appendChild(newCard)
    })
    
      info.technology.forEach(item => {
      const newCard = Card(item)
      cardDiv.appendChild(newCard)
    })
  })
}


// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//
export { Card, cardAppender }
