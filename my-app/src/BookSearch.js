// import React, { useState, useEffect } from 'react';
//
// function BookSearch() {
//     const [keyword, setKeyword] = useState('');
//     const [books, setBooks] = useState([]);
//
//     const handleChange = event => {
//         setKeyword(event.target.value);
//     };
//
//     const handleSubmit = async event => {
//         event.preventDefault();
//         const response = await fetch(`http://localhost:8080/books?q=${keyword}`);
//         const data = await response.json();
//         setBooks(data);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={keyword} onChange={handleChange} />
//                 <button type="submit">Search</button>
//             </form>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Author</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {books.map(book => (
//                     <tr key={book.id}>
//                         <td>{book.title}</td>
//                         <td>{book.author}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
//
// export default BookSearch;

import React, { Component } from 'react';

class BookSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            books: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:8080/books?q=${this.state.keyword}`)
            .then(response => response.json())
            .then(books => {
                this.setState({ books });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
                {this.state.books.map(book => (
                    <div key={book.id}>
                        <h2>{book.title}</h2>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default BookSearch;