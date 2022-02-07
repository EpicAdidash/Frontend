import React from 'react';

function Alert(props) {
  return (
  <div className="container space-x-2" ><div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg " role="alert">
   {props.al.text}
</div>
</div>)
}

export default Alert;
