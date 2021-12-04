import React from "react";
import Logo from "./img/Logo.png";
import Walle from "./img/Wallet.png";
import Nft from "./img/NFT SYMBOL.png";

const Navbar = ({ head }) => {
  return (
    <div className="wallFlex">
      <div>
        <img src={Logo} className="wallLogo" />
        <div className="wallHead">{head}</div>
      </div>
      <div className="flexNft">
        <div className="imgFlexNft">
          <img src={Nft} className="walletImgNft  " />
          <div className="wallImgTextNft">Your Nfts</div>
        </div>
        <div className="imgFlex">
          <img src={Walle} className="walletImg" />
          <div className="wallImgText">Connect Wallet</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
