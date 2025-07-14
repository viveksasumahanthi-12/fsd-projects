class Book {
  constructor(no_of_pages, type_of_pages, author, book_type) {
    this.no_of_pages = no_of_pages;
    this.type_of_pages = type_of_pages;
    this.author = author;
    this.book_type = book_type;
  }
  type_of_book() {
    console.log("This is a " + this.book_type + " book.");
  }
}
const myBook = new Book(250, "Glossy", "J.K. Rowling", "Fiction");
console.log("Author:", myBook.author);
console.log("Pages:", myBook.no_of_pages);
console.log("Page Type:", myBook.type_of_pages);
myBook.type_of_book();
