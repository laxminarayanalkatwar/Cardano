const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
// <div class="sticky-top">
//   <img
//     src="../sun.png"
//     alt="photo"
//     style={{ maxHeight: "5%", maxWidth: "5%" }}
//     className="mb-3 rounded"
//   />
//   <div className="position-relative"></div>
//   <div>
//     <p className="text-center ">
//       <h3 className="container">
//         <img
//           src="../nami.png"
//           size="small"
//           alt="photo"
//           style={{ maxHeight: "16%", maxWidth: "16%" }}
//           className="mb-3 rounded"
//         />
//         Nami
//       </h3>
//     </p>
//   </div>
//   <p className="text-center">
//     <h3 className="container">
//       <img
//         src="../cc.png"
//         alt="photo"
//         style={{ maxHeight: "18%", maxWidth: "18%" }}
//         className="mb-3 rounded"
//       />
//       CCvault
//     </h3>
//   </p>
//   <p className="text-center">
//     <h3 className="container">
//       <img
//         src="../flint.png"
//         alt="photo"
//         style={{ maxHeight: "7%", maxWidth: "7%" }}
//         className="mb-3 rounded"
//       />
//       Flint
//       <div class="position-absolute bottom-0 end-0 translate-middle">
//         <button className="btn btn-info">BETA </button>
//       </div>
//     </h3>
//   </p>
//   <div className="position-absolute top-0 end-0">
//     <li class="nav-item dropdown">
//       <a
//         class="nav-button dropdown-button"
//         id="navbarDropdown"
//         role="button"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         <button className="btn btn-warning"> Connect Wallet</button>
//       </a>
//       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//         <li>
//           <a class="container">
//             <button
//               onClick={onclickNamibuttonwallet}
//               className="btn btn-dark"
//             >
//               NamiBalance : {namiBalance} ADA
//             </button>
//           </a>
//         </li>
//         <li>
//           <a class="dropdown-item" href="#">
//             <button
//               onClick={onclickccvaultbuttonwallet}
//               className="btn btn-dark"
//             >
//               CCvaultBalance : {ccBalance} ADA
//             </button>
//           </a>
//         </li>
//       </ul>
//     </li>
//   </div>
// </div>
