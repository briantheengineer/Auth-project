import './App.css';
import bookData from "./bookData.json"


export default function Xiu() {
  return (
    <div className="mainDiv">
     {myBooks}
    </div>
  )
}

let myBooks = bookData.map((book, index) =>  

<div className="bookDiv" key={index}>
<p>name: {book.title}</p>
  <img
    src={book.imageLink}
    class="img-fluid rounded-top"
    alt="Cover of the book"
  />
</div>
 
)