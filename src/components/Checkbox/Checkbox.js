import React from 'react';

const checkbox = (props) =>
(

    <form>
    <input type="checkbox"
      defaultChecked={props.ticked} onClick={props.clicked} />
    </form>
);

  export default checkbox;