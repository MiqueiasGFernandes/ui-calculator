import React from 'react'

export default props =>
<button onClick={() => props.click()} className="Equals">
    {props.label}
</button>