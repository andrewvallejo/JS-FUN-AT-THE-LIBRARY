function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  } else {
    return shelf;
  }
}

function unshelfBook(book, shelf) {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var listShelf = "";
  for (let i = 0; i < shelf.length; i++) {
    listShelf += shelf[i].title + ", ";
    var spliceShelf = listShelf.slice(0, -2);
  }
  return spliceShelf;
}

function searchShelf(shelf, book) {
  var bookOnShelf = true
  for (let i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      bookOnShelf = true
    } else {
      bookOnShelf = false
    }
  }
  return bookOnShelf
}


module.exports = {
  unshelfBook,
  listTitles,
  shelfBook,
  searchShelf
};
