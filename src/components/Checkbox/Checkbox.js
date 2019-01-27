import React from 'react';

const checkbox = (props) =>
(

    <form>
    <input type="checkbox"
      defaultChecked={props.ticked}/>
    </form>
);

  export default checkbox;