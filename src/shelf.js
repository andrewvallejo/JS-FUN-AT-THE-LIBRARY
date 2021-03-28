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
    //Slice to remove the last ,  feels hardcoded to me. I wanted to use join originally but I kept getting the .join() is not a function.
    var sliceShelf = listShelf.slice(0, -2);
  }
  return sliceShelf;
}

function searchShelf(shelf, book) {
  var isBookOnShelf = true
  for (let i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      isBookOnShelf = true
    } else {
      isBookOnShelf = false
    }
  }
  return isBookOnShelf
}


module.exports = {
  unshelfBook,
  listTitles,
  shelfBook,
  searchShelf
};
