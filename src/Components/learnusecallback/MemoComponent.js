import React, { memo } from 'react'
export default memo(function MemoComponent(props) {
  console.log('rener nay');
  return (
    <div>
      Meno component div
  </div>
  )
});


// class MemoComponent extends React.PureComponent {
//   render() {
//     console.log('rener nay');
//     return (
//       <div>
//         Meno component div
//   </div>
//     );
//   }
// }

// export default MemoComponent;