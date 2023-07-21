import PropTypes from 'prop-types';

const BooksItem = ({bookItem}) => {
    return ( 
         <li>
            <h1>{bookItem.title}</h1>
            <h4>{bookItem.author}</h4>
        </li>
     );
}
 
BooksItem.propTypes = {
    bookItem: PropTypes.array.isRequired, 
}
export default BooksItem;