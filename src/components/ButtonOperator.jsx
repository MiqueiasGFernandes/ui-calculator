import React from 'react';

export default props => 
<button onClick={() => props.click(props.label)} className="Operator">
    {props.label}
</button>