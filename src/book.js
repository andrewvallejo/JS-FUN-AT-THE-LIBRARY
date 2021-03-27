function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronoun, reviews) {
  var character = {
    name: name,
    age: age,
    pronouns: pronoun,
    reviews: reviews
  }
  return character
}

function saveReview(review, reviews) {
  if (!reviews.length) {
    reviews.push(review)
  }
  for (let i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      return reviews
     } else {
       reviews.push(review)
       return reviews
     }
    }
  }
function calculatePageCount(title) {
  var pageCount = title.length
  var results = pageCount * 20
  return  results
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
return book.pageCount
 }
 

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

