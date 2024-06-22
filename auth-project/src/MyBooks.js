import "./MyBooks.css"
import useState from "react";
import bookData from "./bookData.json"
export default function myBooks () {
    return (
        <div className="myBooks-main">
            {myBookData}
        </div>
    )
}



let myBookData = bookData.map((book, index) =>  

    <div id="bookDiv" className="bookDiv" key={index}>
      <div className="book-top">
        <div className="book-text">
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
        <div>
          <form >
          <input key={index} id="bookInput" onClick={setGray} type="checkbox"></input>Read!
          </form>
        </div>
      </div>
    <figure className="book-figure">
      <img className= "book-img"
        src={book.imageLink}
        alt="Cover of the book"
      />
    </figure>
    </div>
      
      
    )
    
function setGray () {
    const myInput= document.getElementById("bookInput")
        if (myInput.checked) {
          this.closest("bookDiv").style.opacity="0.5"
        }
        else {
          document.getElementById("bookDiv").style.opacity="1"
        }
      } 
    
   



