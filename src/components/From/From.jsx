import { createContext, useState } from "react";
import "./From.css";
import { TableBody } from "../TableBody/ProductTable";
import getLocalStorage from "../../otheres/LocalStorage/localStorage";
export const tableDataOfProduct = createContext("");

export const Form = () => {
  const [formInput, setFormInput] = useState(getLocalStorage());
  console.log(formInput);
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDiscription] = useState("");
  const [option, setOption] = useState("Red");
  const submitForm = (e) => {
    e.preventDefault();
    const products = {
      name,
      price,
      productId,
      quantity,
      description, 
      option,
    };
    const setLocalStorage = JSON.stringify([...formInput, products]);
    localStorage.setItem("products", setLocalStorage);
    setFormInput([...formInput, products]);
    setName("");
    setProductId("");
    setPrice("");
    setQuantity("");
    setDiscription("");
  };
  return (
    <>
      <div className="fromContainer">
        <div className="formContainerInput">
          <form action="" onSubmit={submitForm}>
            <input
              type="text"
              name="productName"
              placeholder="Please type the product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              value={productId}
              placeholder="Please type the product id"
              onChange={(e) => setProductId(e.target.value)}
              required
            />
            <input
              value={price}
              type="text"
              placeholder="Please type product price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="text"
              value={quantity}
              placeholder="Please type prodcut quantity"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <input
              value={description}
              type="text"
              placeholder="Please type product description"
              onChange={(e) => setDiscription(e.target.value)}
              required
            />
            <select onChange={(e) => setOption(e.target.value)}>
              <option name="color1" id="">
                Red
              </option>
              <option name="green" id="">
                Green
              </option>
              <option name="blue" id="">
                Blue
              </option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="tableBody">
          <table>
            <tableDataOfProduct.Provider value={{ formInput, setFormInput }}>
              <TableBody></TableBody>
            </tableDataOfProduct.Provider>
          </table>
        </div>
      </div>
    </>
  );
};
