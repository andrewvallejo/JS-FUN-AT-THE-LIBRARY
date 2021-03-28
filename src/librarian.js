class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  //Greet Patron
  greetPatron(name, time) {
    var isMorning = true;
    if (isMorning === time) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  findBook(book) {
    var shelf = this.library.shelves.fantasy;
    var libBook = shelf[0];
    //  console.log(libBook)
    //   // console.log(shelf)
    for (var i = 0; i < shelf.length; i++) {
      var LibraryBook = shelf[i];
      // console.log(libraryBook)
      if (libraryBook === book) {
        return `Yes, we have ${book}`;
      }
    }
  }
}

module.exports = Librarian;
