import React from 'react';

const card = ({name , email ,id }) =>{
    return(
        <div >
            <img alt='robots' src={`https://robohash.org/${id}?size=250x250`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default card;