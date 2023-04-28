import React from "react";
import "./Pricing.scss";
import img from "../img/4.png";

const Pricing = () => {
  return (
    <div id="price" className="pricing">
      <div className="h1">Pricing</div>
      <div className="box">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <div className="up">
            <div className="slogan">
              Quality service at a fair price - that's our promise.&#128515;{" "}
            </div>
            <div className="text">
              Don't worry about our prices. We charge a very reasonable amount
              and focus on providing satisfactory services to our clients. You
              can contact us to discuss further details and learn about our
              pricing, and we will also try to offer you a free trial.
            </div>
          </div>
          <div className="but">

          <button   onClick={() => window.location.replace("/#contact")}>Contact us&#128222;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
