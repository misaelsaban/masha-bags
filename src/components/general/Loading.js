import React from 'react';

function Loading(props) {
  return <div>
            <i class="fas fa-circle-notch fa-spin loader-masha" style={{"font-size": props.tamanio? "10em": "1em" }}></i>
         </div> 
};

export default Loading;

