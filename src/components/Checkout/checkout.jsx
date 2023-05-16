import { useEffect, useState } from "react";
import axios from "axios";
import "./checkout.css";
const Checkout = () => {
  return (
    <div classNameName="maincontainer">
      <div className="container mx-auto sm:px-4">
        <div className="py-5 text-center font-bold text-[25px]">Checkout</div>
        <div className="flex flex-wrap ">
          <div className="md:w-1/3 pr-4 pl-4 md:order-2 mb-4">
            <h4 className="flex justify-between items-center mb-3">
              <span className="text-gray-700">Giỏ hàng của bạn</span>
              <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none bg-gray-600 text-white hover:bg-gray-700 rounded-full py-1 px-3">
                3
              </span>
            </h4>
            <ul className="flex flex-col pl-0 border rounded border-gray-300 mb-3">
              <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-gray-700">Brief description</small>
                </div>
                <span className="text-gray-700">$12</span>
              </li>
              <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-gray-700">Brief description</small>
                </div>
                <span className="text-gray-700">$8</span>
              </li>
              <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-gray-700">Brief description</small>
                </div>
                <span className="text-gray-700">$5</span>
              </li>
              <li className="relative py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between bg-gray-100">
                <div className="text-green-500">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-green-500">-$5</span>
              </li>
              <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <form className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 p-2">
              <div className="relative flex items-stretch w-full">
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700"
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-2/3 pr-4 pl-4 md:order-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate>
              <div className="flex flex-wrap ">
                <div className="md:w-1/2 pr-4 pl-4 mb-3">
                  <label for="firstName">Nhập họ</label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Valid first name is required.
                  </div>
                </div>
                <div className="md:w-1/2 pr-4 pl-4 mb-3">
                  <label for="lastName">Tên</label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              {/* <div className="mb-3">
                <label for="username">Username</label>
                <div className="relative flex items-stretch w-full">
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Your username is required.
                  </div>
                </div>
              </div> */}
              <div className="mb-3">
                <label for="email">
                  Email <span className="text-gray-700"></span>
                </label>
                <input
                  type="email"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="email"
                  placeholder="Nhập email"
                />
                <div className="hidden mt-1 text-sm text-red">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label for="address">Địa chỉ</label>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="address"
                  placeholder="Địa chỉ"
                  required
                />
                <div className="hidden mt-1 text-sm text-red">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label for="address2">
                  Số điện thoại <span className="text-gray-700"></span>
                </label>
                <input
                  type="number"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="sdt"
                  placeholder=""
                />
              </div>
              {/* <div className="flex flex-wrap ">
                <div className="md:w-2/5 pr-4 pl-4 mb-3">
                  <label for="country">Country</label>
                  <select
                    className="custom-select block w-full"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="hidden mt-1 text-sm text-red">
                    Please select a valid country.
                  </div>
                </div>
                <div className="md:w-1/3 pr-4 pl-4 mb-3">
                  <label for="state">State</label>
                  <select
                    className="custom-select block w-full"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="hidden mt-1 text-sm text-red">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="md:w-1/4 pr-4 pl-4 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Zip code required.
                  </div>
                </div>
              </div> */}
              {/* <hr className="mb-4" /> */}
              {/* <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div> */}
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              {/* <div className="block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    checked
                    required
                  />
                  <label className="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div> */}
              <div className="block my-3 mb-[100px]">
                <ul className="payment-methods">
                  <li className="payment-method paypal">
                    <input name="payment_methods" type="radio" id="paypal" />
                    <label htmlFor="paypal">PayPal</label>
                  </li>

                  <li className="payment-method pagseguro">
                    <input name="payment_methods" type="radio" id="pagseguro" />
                    <label htmlFor="pagseguro">PagSeguro</label>
                  </li>

                  <li className="payment-method bankslip">
                    <input name="payment_methods" type="radio" id="bankslip" />
                    <label htmlFor="bankslip">Boleto</label>
                  </li>
                </ul>
              </div>
              <hr className="mb-4" />
              <button
                className=" align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-blue-600 text-white hover:bg-blue-600 py-3 px-4 leading-tight text-xl block w-full mb-8 mt-8"
                type="button"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
