import { useState } from "react"


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
    return (
        <>
            
        </>
    );
}

export default Books;