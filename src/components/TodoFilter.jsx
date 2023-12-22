// import React, { useState } from 'react';

// function TodoFilter({ setFilter }) {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//     setFilter(filter); 
//   };

//   return (
//     <div className="controls">
//       <div className="filter">
//         <button
//           className={activeFilter === 'all' ? 'active' : ''}
//           onClick={() => handleFilterClick('all')}
//         >
//           All
//         </button>
//         <button
//           className={activeFilter === 'active' ? 'active' : ''}
//           onClick={() => handleFilterClick('active')}
//         >
//           Active
//         </button>
//         <button
//           className={activeFilter === 'completed' ? 'active' : ''}
//           onClick={() => handleFilterClick('completed')}
//         >
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TodoFilter;
