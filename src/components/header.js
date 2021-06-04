const Header = (title, date, temp) => {
  // const hideInstructions = () => {

  //   // TASK 1
  //   // ---------------------
  //   // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  //   // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  //   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //   //
  //   //  <div class="header">
  //   //    <span class="date">{ date }</span>
  //   //    <h1>{ title }</h1>
  //   //    <span class="temp">{ temp }</span>
  //   //  </div>
  //   //
  // }

  /////////////// Instantiating the elements /////////////////
  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const heading = document.createElement('h1')
  const tempSpan = document.createElement('span')

  ////////////// Setting classes, text, attrs /////////////////
  headerDiv.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')
  dateSpan.textContent = date
  heading.textContent = title
  tempSpan.textContent = temp

  ////////////// Hierarchy /////////////////
  headerDiv.appendChild(dateSpan)
  headerDiv.appendChild(heading)
  headerDiv.appendChild(tempSpan)

  return headerDiv
}
const headerAppender = (selector) => {
  // const hideInstructions = () => {
  //   // TASK 2
  //   // ---------------------
  //   // Implement this function taking a css selector as its only argument.
  //   // It should create a header using the Header component above, passing arguments of your choosing.
  //   // It should append the header to the element in the DOM that matches the given selector.
  //   //
  // }

  //////// Get date the fancy way /////////////
  var newDate = new Date();
  var today = newDate.toDateString()

  const headerContainer = document.querySelector(selector)
  const header = Header('Lambda Times', today, '451°')
  console.log('check', header)
  headerContainer.appendChild(header)

}

export { Header, headerAppender }
