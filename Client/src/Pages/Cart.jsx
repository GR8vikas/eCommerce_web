import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import QuantityBox from "../Components/QuantityBox";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";

const Cart = () => {
  return (
    <>
      <section>
        <div className="container cartpage">
          <h2 className="hd mb-0">Your Cart</h2>
          <p>
            There are <b>3</b> products in your cart
          </p>
          <div className="row">
            <div className="col-sm-9 pe-5">
              <div className="table-responsive mt-2">
                <table className="table ">
                  <thead>
                    <tr>
                      <th width="40%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="20%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartimagewraper">
                            <div className="imagewraper">
                              <img
                                className="w-100"
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                className="mt-0"
                                name="read-only"
                                value={5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="20%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartimagewraper">
                            <div className="imagewraper">
                              <img
                                className="w-100"
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                className="mt-0"
                                name="read-only"
                                value={5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="20%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartimagewraper">
                            <div className="imagewraper">
                              <img
                                className="w-100"
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                alt=""
                              />
                            </div>
                            <div className="info px-3">
                              <h6>
                                All Natural Italian-Style Chicken Meatballs
                              </h6>
                              <Rating
                                className="mt-0"
                                name="read-only"
                                value={5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="20%">
                        <QuantityBox />
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border p-3 cartdetails">
                <h4>Cart totals</h4>
                <div className="info">
                  <div className="d-flex mb-3 align-items-center  ">
                    <span>Subtotal</span>
                    <span className="ms-auto text-red font-weight-bold">
                      $11.24
                    </span>
                  </div>

                  <div className="d-flex mb-3  align-items-center ">
                    <span>Shipping</span>
                    <span className="ms-auto ">
                      <b>Free</b>
                    </span>
                  </div>

                  <div className="d-flex mb-3  align-items-center ">
                    <span>Estimate for</span>
                    <span className="ms-auto">
                      <b>United Kingdom</b>
                    </span>
                  </div>

                  <div className="d-flex align-items-center  ">
                    <span>Total</span>
                    <span className="ms-auto text-red font-weight-bold">
                      $11.24
                    </span>
                  </div>
                  <br />
                  <Button className="btn btn-red btn-lg btn-big w-100">
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
