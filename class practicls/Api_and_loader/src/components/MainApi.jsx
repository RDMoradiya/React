import React, { useEffect, useState } from "react";
import Infos from "./Infos";
import Loader from "./Loader";
import MainApidata from "./MainApidata";

const MainApi = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [enterdList, setenterdList] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const AddwatchListHandler = (title) => {
    setenterdList([...enterdList, title]);
  };

  const HideHandler = () => {
    setProducts([]);
    setenterdList([]);
  };

  return (
    <div className="container">
      <div className="mt-5 mb-3 d-flex align-item-center justify-content-between">
        <div>
          <h1>API Calling :-</h1>
        </div>
        <div>
          <button className="btn btn-success" onClick={HideHandler}>
            Hide
          </button>
        </div>
      </div>

      <div className="row ">
        <div className="col-10">
          <div className="row">
            {products.map((item, index) => {
              const { title, price, description, image, rating } = item;
              return (
                <MainApidata
                  key={index}
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                  rating={rating}
                  onClick={() => AddwatchListHandler(price)}
                />
              );
            })}
          </div>
        </div>

        <div className="col-2">
          <h2>WatchList :-</h2>

          <ul className="list-group">
            {enterdList.map((item, index) => {
              return <Infos key={index} label={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainApi;
