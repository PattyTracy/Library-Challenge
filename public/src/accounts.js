function findAccountById(accounts, id) {
  const targetAccount = accounts.find((account) => account.id === id)
  return targetAccount
}

function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1)) 
  return sortedAccounts
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (account.id === borrow.id) {
        result += 1;
      }
    }
  )})
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    let recent = book.borrows[0];
    return !recent.returned && recent.id === account.id
    // return book.borrows.some((borrow) => borrow.id === account.id)
   }).map((book) => {
    const author= authors.find(author => author.id === book.authorId);
    return { ...book, author }
   });
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
