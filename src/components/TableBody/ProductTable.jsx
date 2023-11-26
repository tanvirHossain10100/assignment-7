import { useContext } from "react";
import { tableDataOfProduct } from "../From/From";
import "./TAbleBody.css";

export const TableBody = () => {
  const { formInput, setFormInput } = useContext(tableDataOfProduct);
  //   const { productId, price, quantity, description, name } = formInput;
  //   console.log(productId);
  return (
    // Create a FormData components, the form contains input fields like Product Name, Product Id, Price, Quantity, Description, a select menu that contains three colors as options like "red","blue","green".
    <>
      <thead>
        {formInput.length === 0 ? (
          <h1 className="noproductsText">No products added yet</h1>
        ) : (
          <tr>
            <th>Name</th>
            <th>ProductId</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Color</th>
            <th>Delete</th>
          </tr>
        )}
      </thead>
      <tbody>
        {formInput.map((productDetails) => (
          <tr key={productDetails.productId}>
            <td>{productDetails.name}</td>
            <td>{productDetails.productId}</td>
            <td>{productDetails.price}</td>
            <td>{productDetails.quantity}</td>
            <td>{productDetails.description}</td>
            <td>{productDetails.option}</td>
            <td
              className="delBtn"
              onClick={() => {
                const rest = formInput.filter(
                  (product) => product.productId !== productDetails.productId
                );
                setFormInput(rest);
                const updatedRest = JSON.stringify(rest);
                localStorage.setItem("products", updatedRest);
              }}
            >
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
