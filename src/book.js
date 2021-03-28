// Title Creator
function createTitle(title) {
  return `The ${title}`;
}

// Character Builder
function buildMainCharacter(name, age, pronoun, reviews) {
  var character = {
    name: name,
    age: age,
    pronouns: pronoun,
    reviews: reviews,
  };
  return character;
}

// Review Saver
function saveReview(review, reviews) {
  if (!reviews.length) {
    reviews.push(review);
  }
  for (let i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      return reviews;
    } else {
      reviews.push(review);
      return reviews;
    }
  }
}

//Page Count Calculator
function calculatePageCount(title) {
  var pageCount = title.length;
  return pageCount * 20;
}

// Book Builder
function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
  return book;
}

// Edit Page Count
function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
