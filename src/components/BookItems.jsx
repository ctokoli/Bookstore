import PropTypes from 'prop-types';
import BooksItem from './BookItem';

const BookItems = ({booksProps}) => {
    return ( 
        <div className="bookItems">
            <ul>
                {booksProps.map((book) => (
                <BooksItem 
                    key={book.id}
                    bookItem={book}
                />
                ))}
            </ul>
        </div>
     );
}

BookItems.propTypes = {
    booksProps: PropTypes.array.isRequired,
}
 
export default BookItems;