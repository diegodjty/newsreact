import React from 'react';
import News from './News';

const NewsList = ({news}) => {


    return (
        <div className='row'>
            
            {news.map( i => (
                <News news={i}/>
            ) )}
 
        </div>
    );
};

export default NewsList;