import React from 'react';
import SingleMovie from '../components/SingleMovie';

const movies = [
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019}
]

const Movies = () => {
    return ( 
        <div className='movies'>
            {movies.map((data) => {
                return <SingleMovie/>
            })}
        </div>
     );
}
 
export default Movies;