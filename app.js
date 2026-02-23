// function First(){
//     return (
//         <div>
//             Hello From Component
//         </div>
//     )
// }

// Component Arrow Function
// const First = ()=>{
//     return (
//         <div>
//             Hello from Arrow function
//         </div>
//     )
// }

//Class Component

// class First extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Hello From
//                 </h1>
//             </div>
//         )
//     }
// }

//header Component
function HeaderComponent() {
  return (
    <div className="fixed-header">
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>
    </div>
  );
}

//Container Component
function ContainerComponent() {
  return (
    <div className="container">
      <p>
        Et proident cillum voluptate duis ea quis consectetur Lorem esse
        exercitation.
      </p>
    </div>
  );
}

//Footer Comonent
function FooterComponent() {
  return (
    <div className="fixed-footer">
      <div className="container">Copyright &copy; 2026 React</div>
    </div>
  );
}
const element = (
  <div>
    <HeaderComponent />
    <ContainerComponent />
    <FooterComponent/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(element);
