// import React, { useState } from 'react';
// import './searchbar.css';
// import { IoIosSearch } from 'react-icons/io';

// function SearchBar() {
//   const [showSearch, setShowSearch] = useState(false);

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//   };

//   return (
//     <div className="top-search">
//       <div className="container">
//         <div className="input-group">
//           <span className="input-group-addon" onClick={toggleSearch}>
//             <IoIosSearch />
//           </span>
//           {showSearch && (
//             <input type="text" className="form-control" placeholder="Search" />
//           )}
//           {showSearch && (
//             <span className="input-group-addon close-search" onClick={toggleSearch}>
//               <i className="fa fa-times"></i>
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;