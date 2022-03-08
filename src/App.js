import React, { useState } from "react";
import { encode, decode } from "cborg";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import "./App.css";
import { wallet } from "./components/wallet";
let Buffer = require("buffer/").Buffer;

const App = () => {
  let [namiBalance, setNamiBalance] = useState("Nami");
  let [ccBalance, setCCBalance] = useState("ccvault");

  const onclickNamibuttonwallet = () => {
    const res = window.cardano.nami.enable();
    res.then((res) => {
      res.getBalance().then((val) => {
        let decoded = decode(Buffer.from(val, "hex"));
        setNamiBalance(decoded / 1000000);
      });
    });
  };

  const onclickccvaultbuttonwallet = () => {
    const res2 = window.cardano.ccvault.enable();
    res2.then((res) => {
      res.getBalance().then((val) => {
        let decoded = decode(Buffer.from(val, "hex"));
        setCCBalance(decoded / 1000000);
      });
    });
  };

  function toggle() {
    console.log("Clicked");
    if (document.querySelector(".walletCard").style.display === "block")
      document.querySelector(".walletCard").style.display = "none";
    else document.querySelector(".walletCard").style.display = "block";
  }
  // function toggle(){
  //   if(document.querySelector(".walletCard").)
  // }
  return (
    <div className="position-relative">
      <div className="position-absolute top-0 end-0">
        <div>
          <div className="connect">
            <div className="mode">
              <img src="../sun.png" />
            </div>
            <div className="connect-btn">
              <button className="btn btn-warning" onClick={toggle}>
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="walletCard" style={{ display: "none" }}>
            <div className="wallet" onClick={onclickNamibuttonwallet}>
              <div className="walletLogo">
                <img src="../nami.png" alt="" srcset="" />
              </div>
              <div className="walletName">{namiBalance}</div>
            </div>
            <div className="wallet" onClick={onclickccvaultbuttonwallet}>
              <div className="walletLogo">
                <img src="../cc.png" alt="" srcset="" />
              </div>
              <div className="walletName">{ccBalance}</div>
            </div>
            <div className="wallet">
              <div className="walletLogo">
                <img src="../flint.png" alt="" srcset="" />
              </div>
              <div className="walletName">Flint</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
