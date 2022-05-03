

import React from "react";
import cw from "../assets/cw_logo.png"

//! parent render edildiğinde child render etmesini İSTEMEDİĞİMZ zaman USEMEMO kullanılır 

//!3yöntem var 1.si comp. useMemo ile sarmallama

// const Header = React.memo(({img}) => {
//     console.log("render oldu");

 
//   return (
//     <div>
//         <img src={img ? img:cw} alt="cw_logo" style={{margin:"1rem",maxHeight:"200px"}} />

//     </div>
//   )
// });

//!2nci kullanım direk memo yu dectruction yaparak kullanırız

// import {memo} from "react";
// const Header = memo(({img}) => {
//     console.log("render oldu");

 
//   return (
//     <div>
//         <img src={img ? img:cw} alt="cw_logo" style={{margin:"1rem",maxHeight:"200px"}} />

//     </div>
//   )
// });
//export default Header
//!3ncü yöntem sadece export kısmı memo ile sarmallanır
import {memo} from "react";
const Header = ({img}) => {
    console.log("render oldu");

 
  return (
    <div>
        <img src={img ? img:cw} alt="cw_logo" style={{margin:"1rem",maxHeight:"200px"}} />

    </div>
  )
};
export default memo(Header);

 
