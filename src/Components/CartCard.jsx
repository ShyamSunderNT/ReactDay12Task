import React, { useState, useContext } from 'react';
import { UserContext } from '../Pages/Products';

function CartCard() {
  let { product, setProduct } = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        {product.map((element, index) => {
          const discountPrice = Math.round((element.price * element.discountPercentage) / 100);
          const [quantity, setQuantity] = useState(1);

          const addQuantity = () => {
            setQuantity(quantity + 1);
          };

          const removeQuantity = () => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          };

          return (
            
            <div key={index} className="col-md-12 mb-5">
              <div className="card border border-secondary">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src={element.image} className="img-fluid rounded-start cardImage" alt="Loading..." />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body px-3">
                      <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{element.title}</h5>
                          <h4 className="card-title">${element.price}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">Brand : {element.brand}</p>
                          <p className="card-text text-success">Discount Offer : {element.discountPercentage}%</p>
                        </div>
                        <p className="card-text">{element.description}</p>
                        <p className="card-text">Rating : {element.rating}/5</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </p>
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              style={{ marginRight: '8px' }}
                              onClick={() => {
                                removeQuantity();
                              }}
                            >
                              {' '}
                              -{' '}
                            </button>
                            <div className="py-1 quantityText">{quantity}</div>
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              style={{ marginLeft: '8px' }}
                              onClick={() => {
                                addQuantity();
                              }}
                            >
                              {' '}
                              +{' '}
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="bottom">
                        <div className="d-flex justify-content-between align-items-center">
                          Original Price (1 item) :
                          <p className="card-text">${element.price} </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Discount Amount :
                          <p className="card-text text-success"> - ${discountPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Final Price (Price - Discount) :
                          <p className="card-text">${element.price - discountPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Total Amount (Final price * Quantity) :
                          <h5 className="card-text">${element.price * quantity}</h5>
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary float-end my-3">
                        Proceed to pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartCard;