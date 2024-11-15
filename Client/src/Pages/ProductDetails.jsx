import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import ProductZoom from "../Components/ProductZoom";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "@mui/material/Button";

import QuantityBox from "../Components/QuantityBox";
import { useState } from "react";
import RelatedProduct from "../Components/RelatedProduct";
import { mycontext } from "../App";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const context = useContext(mycontext);
  const { product } = location.state || {};

  return (
    <>
      <section className="productDetails section mt-3 mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-sm-4 pe-5">
              <ProductZoom />
            </div>
            <div className="col-sm-5 ps-5 pe-5">
              <h2 className="hd text-capitalize">{context?.name}</h2>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <span>Brands:</span>
                  <span className="ms-2 ">Welch's</span>
                </div>

                <Rating
                  className=" ms-4"
                  name="read-only"
                  value={5}
                  readOnly
                  size="small"
                  precision={0.5}
                />
                <span className="ms-2">1 Review</span>
              </div>

              <div className="d-flex info  productdetailmodal align-items-center mt-4">
                <span className="oldprice me-2 lg">$20.00</span>
                <span className="netprice text-danger lg">$14.50</span>
              </div>
              <span className="badge bg-success mt-2 mb-2">In Stock</span>
              <p className="mt-2 mb-2">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent
              </p>
              <div className="d-flex info  align-items-center mt-5 mb-5">
                <QuantityBox />
                <Button className="btn btn-blue btn-lg btn-big btn-round ">
                  Add To Cart
                </Button>
              </div>
              <div className="d-flex info  align-items-center action mt-4">
                <Button variant="outlined" className=" btn-round btn-sml">
                  <IoIosHeartEmpty
                    style={{ fontSize: "20px" }}
                    className="me-1"
                  />
                  Add to Wishlist
                </Button>
                <Button className=" btn-round btn-2 ms-2">
                  <HiOutlineSwitchVertical
                    style={{ fontSize: "20px" }}
                    className="me-1"
                  />
                  Compare
                </Button>
              </div>
            </div>
          </div>
          <br />
          <div className="card mt-5 p-5 detailspageTabs">
            <div className="customsTabs">
              <ul className="list list-inline">
                <li className="list list-inline-item">
                  <Button
                    onClick={() => setActiveTab(0)}
                    className={activeTab == 0 && "act"}
                  >
                    Description
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button
                    onClick={() => setActiveTab(1)}
                    className={activeTab == 1 && "act"}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button
                    className={activeTab == 2 && "act"}
                    onClick={() => setActiveTab(2)}
                  >
                    Reviews(9)
                  </Button>
                </li>
              </ul>
            </div>
            {activeTab === 0 && (
              <div className="tabcontant">
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart.
                </p>
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart.
                </p>
                <br />
                <h2>Packaging & Delivery</h2>
                <hr />
                <p>
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly.
                </p>
                <p>
                  Scallop or far crud plain remarkably far by thus far iguana
                  lewd precociously and and less rattlesnake contrary caustic
                  wow this near alas and next and pled the yikes articulate
                  about as less cackled dalmatian in much less well jeering for
                  the thanks blindly sentimental whimpered less across
                  objectively fanciful grimaced wildly some wow and rose jeepers
                  outgrew lugubrious luridly irrationally attractively
                  dachshund.
                </p>
                <h2>Suggested Use</h2>
                <p>
                  Refrigeration not necessary. <br />
                  Stir before serving
                </p>
                <h2>Other Ingredients</h2>
                <p>
                  Organic raw pecans, organic raw cashews. <br />
                  This butter was produced using a LTG (Low Temperature
                  Grinding) process Made in machinery that processes tree nuts
                  but does not process peanuts, gluten, dairy or soy
                </p>
              </div>
            )}
            {activeTab == 1 && (
              <div className="tabcontant">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr class="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr class="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr class="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr class="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr class="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr class="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr class="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr class="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr class="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr class="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr class="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr class="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr class="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab == 2 && (
              <div className="tabcontant">
                <div className="row">
                  <div className="col-sm-8">
                    <h3>Customer questions & answers</h3>
                    <div className="card p-3 mt-4 reviewcard flex-row">
                      <div className="image">
                        <div className="rounded-circle ">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt=""
                          />
                          <span className="text-suceess d-block text-center font-weight-bold">
                            saina
                          </span>
                        </div>
                      </div>
                      <div className="info ps-5 pt-1">
                        <div className="d-flex align-items-center">
                          <h5 className="text_light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <Rating
                            className=" ms-auto"
                            name="read-only"
                            value={5}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-3 reviewcard flex-row">
                      <div className="image">
                        <div className="rounded-circle ">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt=""
                          />
                          <span className="text-suceess d-block text-center font-weight-bold">
                            saina
                          </span>
                        </div>
                      </div>
                      <div className="info ps-5 pt-1">
                        <div className="d-flex align-items-center">
                          <h5 className="text_light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <Rating
                            className=" ms-auto"
                            name="read-only"
                            value={5}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-3 reviewcard flex-row">
                      <div className="image">
                        <div className="rounded-circle ">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt=""
                          />
                          <span className="text-suceess d-block text-center font-weight-bold">
                            saina
                          </span>
                        </div>
                      </div>
                      <div className="info ps-5 pt-1">
                        <div className="d-flex align-items-center">
                          <h5 className="text_light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <Rating
                            className=" ms-auto"
                            name="read-only"
                            value={5}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-3 reviewcard flex-row">
                      <div className="image">
                        <div className="rounded-circle ">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt=""
                          />
                          <span className="text-suceess d-block text-center font-weight-bold">
                            saina
                          </span>
                        </div>
                      </div>
                      <div className="info ps-5 pt-1">
                        <div className="d-flex align-items-center">
                          <h5 className="text_light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <Rating
                            className=" ms-auto"
                            name="read-only"
                            value={5}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-3 reviewcard flex-row">
                      <div className="image">
                        <div className="rounded-circle ">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt=""
                          />
                          <span className="text-suceess d-block text-center font-weight-bold">
                            saina
                          </span>
                        </div>
                      </div>
                      <div className="info ps-5 pt-1">
                        <div className="d-flex align-items-center">
                          <h5 className="text_light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <Rating
                            className=" ms-auto"
                            name="read-only"
                            value={5}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div class="comment-form">
                      <h4 class="mb-15">Add a review</h4>
                      <div class="product-rate d-inline-block mb-30"></div>
                      <div class="row">
                        <div class="col-lg-8 col-md-12">
                          <form
                            class="form-contact comment_form"
                            action="#"
                            id="commentForm"
                          >
                            <div class="row">
                              <div class="col-12 mb-3">
                                <div class="form-group">
                                  <textarea
                                    class="form-control w-100"
                                    name="comment"
                                    id="comment"
                                    cols="30"
                                    rows="9"
                                    placeholder="Write Comment"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    data-listener-added_e0225e9a="true"
                                  />
                                </div>
                              </div>
                              <div class="col-12 mb-3">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    name="website"
                                    id="website"
                                    type="text"
                                    placeholder="Website"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <Button>Submit Review</Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4"></div>
                </div>
              </div>
            )}
          </div>
          <br />
          <RelatedProduct title="Related products" />
          <br />
          <RelatedProduct title="Recently Viewed Products" />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
