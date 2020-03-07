import React from 'react';

export default (props) => 
<button onClick={() => props.click(props.label)} className="Button">
    {props.label}
</button>