import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const AddMovie = () => {
    return ( 
        <div className='addMovie' id="addNewMovie">
            <form>
                <input type="text" placeholder='Movie Name' required />
                <input type="text" placeholder='Movie Genre' required />
                <input type="text" placeholder='Movie Year' />

                <button>Add Movie</button>
            </form>
            <div className='top'>
                <Link smooth to="#header" className='top-button'>Back to top</Link>
            </div>
        </div>
     );
}
 
export default AddMovie;