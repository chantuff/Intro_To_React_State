import { useState } from "react";
import "./App.css";
import products from "./data";

function App() {
  console.log(products);
  // add state in here
  const [productList, setProductList] = useState(products);
  const [value, setValue] = useState("");
  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
  });

  const isHiring = true;
  console.log(isHiring ? 'Yes, we are hiring' : 'Sorry, try again tomorrow');
  
  const Hiring = () => {
    const [isHiring, setIsHiring] = useState(true);

    const toggleHiring = () => {
      setIsHiring(!isHiring);
    }
  }
  // handleChange function
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  // handleSubmit
  const handleSubmit = (event) => {
    <form onSubmit={this.handleSubmit}></form>;
    event.preventDefault();

    console.log("you prevented the default");
    console.log(form);
    const newProduct = form;
    setProductList([newProduct, ...productList]);
  };

  // return
  return (
    <div>
      {" "}
    
      <h1> Big Time Shopping </h1>
      {!isHiring ? (
        <h2>Yes, we are hiring </h2>
      ) : (
        <h2>Sorry, try again tomorrow</h2>
      )}
      <form>
        <input
          type="text"
          value={form.itemName}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
        />
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
      </form>
      <div>
        {" "}
        <h2>Preview our new item</h2> <h3>{form.itemName}</h3>
        <h4>{form.price}</h4>
        <h5>{form.description}</h5>{" "}
      </div>
      <ul>
        {" "}
        {productList.map((item) => (
          <li>
            {item.itemName}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
