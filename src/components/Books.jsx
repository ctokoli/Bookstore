import { useState } from "react"
import BookItems from "./BookItems";
import BookForm from "./BookForm";


const Books = () => {
    const [books, setBooks] = useState([
       {
          id: 1,
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinge',
        },
        {
          id: 2,
          title: 'To the Lighthouse',
          author: 'Virginia Woolf',
        },
        {
          id: 3,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
        },
        {
          id: 4,
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
        },
    ])
    setBooks
    return (
        <>
            <BookItems
                booksProps={books}
            />
            <BookForm />
        </>
    );
}

export default Books;