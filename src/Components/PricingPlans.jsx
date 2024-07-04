import React from "react";
import { pricingPlans } from "../constants/data.js";

const PricingPlans = () => {
  return (
    <div className="flex justify-center">
      {pricingPlans.map((plan) => (
        <>
          <div
            key={plan.id}
            className="m-4 border rounded-lg shadow-lg p-6 bg-white"
          >
            {plan.popular && (
              <div className="text-center text-sm bg-gray-300 py-1 font-semibold ">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-semibold text-center">{plan.name}</h2>
            <div className="text-center my-4 text-3xl">{plan.price}</div>
            <ul className="mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="p-4 border-t">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 text-white ${plan.buttonColor} rounded-lg`}
            >
              {plan.buttonText}
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default PricingPlans;
