function findAuthorById(authors, id) {
  const targetAuthor = authors.find((author) => author.id === id)
  return targetAuthor
}

function findBookById(books, id) {
  const targetBook = books.find((book) => book.id === id)
  return targetBook
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = []
  let bookReturned = []
  books.forEach((book) => book.borrows[0].returned ? bookReturned.push(book) : borrowed.push(book))
const booksStatus = [borrowed, bookReturned]
return booksStatus
}

function getBorrowersForBook(book, accounts) {
  let borrowers = book.borrows.map((borrow) => {
    const borrowed = accounts.find(account => account.id === borrow.id);
       borrowed.returned = borrow.returned;
    return borrowed;
  })
    return borrowers.slice(0,10);
}  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
