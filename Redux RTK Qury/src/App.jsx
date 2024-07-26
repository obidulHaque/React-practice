import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./Store/ProductsApi";
import { useState } from "react";
import Footer from "./Components/Footer";
function App() {
  // const { data, isLoading, error, isError } = useGetAllProductsQuery();
  const [input, setInput] = useState("");
  const [srInput, setSrInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSrInput(input);
  };
  const {
    data: singleProduct,
    error,
    isError,
    isLoading,
  } = useGetSingleProductQuery(srInput);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <p>{error}</p>;

  return (
    <div className="App">
      <div className="flex justify-between h-[5vw] items-center fixed w-full z-50 border-b-[0.01vw] border-red-500 px-10">
        <p className="lg:text-[2vw] text-[3vw] ">JOY'S Mart</p>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4 ">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-red-400 text-black rounded-md bg-transparent w-[20vw] lg:h-[2.5vw] h-[4vw]"
          />
          <button
            type="submit"
            className="px-4  bg-blue-500 text-white rounded-md lg:h-[2vw] h-[4vw] lg:text-[1vw] text-[3vw] flex items-center justify-center"
          >
            Search
          </button>
        </form>
        <p>Contract</p>
      </div>
      <div>
        <ul className=" lg:flex lg:flex-wrap block justify-between py-20 px-5">
          {singleProduct &&
            singleProduct.products.map((item, index) => {
              return (
                <li className="lg:w-[22%] w-full lg:h-[30vw] h-[80vw] flex flex-col items-center mb-4 p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg border border-gray-300 gap-6  ">
                  {item.title}
                  <img
                    src={item.images[0]}
                    alt=""
                    className={`${
                      index === 5 ? "w-50" : "w-200"
                    } overflow-hidden`}
                  />
                  <p>{item.price}</p>
                  <hr />
                </li>
              );
            })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
