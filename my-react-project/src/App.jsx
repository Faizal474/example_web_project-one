import "./App.css";
import { useState , useEffect} from "react";
import MyImage from "./image/myimage.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1> {name}'s Toy Sotre</h1>
      <p>copyright &copy; {year}</p>
    </header>
  );
}

const items = ["Apple", "Ball", "Cat", "Dog", "Elephant"];

function Main({ listitems, Storestatus, onstatus}) {
  return (
    <>
      <h2>The Store Is Currently {Storestatus ?"open":"close"}</h2>
      <button onClick={()=> onstatus(false)}>close</button>
      <img src={MyImage} height={300} width={300} alt="image" />
      <img src="https://github.com/ShriIra.png" width={200} height={200} alt="logo" />
      <ul>
        {listitems.map((item) => 
          <li key={item.id} style={{ listStyleType: "none" }}>
            {item.title}
          </li>)}
      </ul>
    </>
  );
}

const itemObjects = items.map((item, i) => {
  return { id: i, title: item };
});


// const animal=["Lion","Zebra","Beer"];
//  const[firstanimal,thirdanimal]=animal;
//  console.log(firstanimal);
//  console.log(thirdanimal);


function App() {
  const [status, setStatus]= useState(true);
  console.log(status);

  // const [status, toggle]= useReducer((status)=> !status, true)

  useEffect(()=>{
    console.log(`the toy store is ${status ? "open":"close"}`)
  },[status]);
  return (
    <div>

      <h1>The Store Is Currently {status ?"open":"close"}</h1>
      <button onClick={()=>setStatus(!status)}>{status ?"close":"open"}Store</button>

      {/* <button onClick={toggle}>{status ?"close":"open"}Store</button> */}
      

      <Header name="Faizal" year={new Date().getFullYear()} />
      <Main listitems={itemObjects} Storestatus={status} onstatus={setStatus}/>
     
    </div>
  );
}

export default App;
