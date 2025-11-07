/*
  Level Access Interview

  Given a book and a set of pages, 
  return the pages content as the set provided indicates.

  Input:
  let book = {
    title: "Sarah's key",
    author: "Tatiana de Rosnay",
    pages: ["first", "second", "third", "fourth", "fifth", 
      "sixth", "seventh", "eighth", "nineth"]
  }
  let pages = "3,4,5-7";

  Output:
  ["third", "fourth", "fifth", "sixth", "seventh"]

  Constraints:
  • variable pages will contain pages that exists
  • book.pages.legth > 0
*/

function filterPages(book, pages){
  const result = [];
  const temp = pages.split(",");

  for(let i = 0; i < temp.length; i++){
    const item = temp[i];
    if(isNaN(item)){
      const [start, end] = item.split("-");
      for(let j = start; j <= end; j++){
        result.push(book.pages[j-1]);
      }
    }else{
      result.push(book.pages[item-1]);
    }
  }
  return result;
}

let book = {
    title: "Sarah's key",
    author: "Tatiana de Rosnay",
    pages: ["first", "second", "third", "fourth", "fifth", 
      "sixth", "seventh", "eighth", "nineth"]
  }
let pages = "3,4,5-7";

console.log(filterPages(book, pages));


