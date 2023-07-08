function getTotalBooksCount(books) {
  const total = books.length
  return total
}

function getTotalAccountsCount(accounts) {
  const allAccounts = accounts.length
  return allAccounts
}

function getBooksBorrowedCount(books) {
  let result = 0
  books.forEach((book) => book.borrows[0].returned ? result : result ++  )
return result
}  

function getMostCommonGenres(books) {
  const genres = books.reduce((result,book) => {
    const genre = book.genre;
      if (!result[genre]) {
      const resultGenre = {name: `${genre}`, count: 1};
        result[genre] = resultGenre
      } else {
        result[genre].count ++
      }    
  return result;
  }, {})
  const sortedGenres = Object.values(genres).sort(sortByPopularity)
  return sortedGenres.slice(0, 5)
}
function sortByPopularity(genre1, genre2) {
  return (genre1.count < genre2.count ? 1 : -1)
}

function getMostPopularBooks(books) {
  if (!books) {
    return false;
  }
  const result = books.map((book) => {
    const bookName = book.title;
    const bookCount = book.borrows.length;
    return book = {name: `${bookName}`, count: bookCount}
  })
    let popularity = result.sort((book1, book2 ) => {
    return (book1.count < book2.count ? 1 : -1);
  })
   return popularity.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  if (!books || !authors) {
    return false;
  }
  const popularity = books.reduce((result, book) => {
    let writer = book.authorId;
    const count = book.borrows.length;
    const popWriters = authors.find(author => author.id === writer);
    const name = `${popWriters.name.first} ${popWriters.name.last}`;
    const authExists = result.find(auth => auth.name === name);
     if(authExists) {
       authExists.count += count;
    } else {
    const newAuthEntry = {
        name,
        count
      };
      result.push(newAuthEntry);
    }
    return result;
  },  []);
  const sortedWriters = Object.values(popularity).sort(sortByPopularity)
  return sortedWriters.slice(0, 5);
  }
function sortByPopularity(writer1, writer2) {
  return (writer1.count < writer2.count ? 1 : -1)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
