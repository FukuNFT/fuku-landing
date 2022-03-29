import React from "react";
import "./App.scss";
import { DefiApps, EtherBox, EtherMarket, EtherPhone } from "./assets";
import { CaptionedImageProps } from "./components/CaptionedImage";
import { CaptionedImageList } from "./components/CaptionedImageList/CaptionedImageList";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

function App() {
  const captionedImagesList: CaptionedImageProps[] = [
    {
      image: <EtherPhone />,
      imageCaptionHeader: "Deposit ETH into a farm",
      imageCaptionDescription:
        "Choose a vault and deposit its designated asset(s)",
    },
    {
      image: <EtherMarket />,
      imageCaptionHeader: "Place bids in the marketplace",
      imageCaptionDescription:
        "Explore the marketplace and find your favorite NFTs",
    },
    {
      image: <EtherBox />,
      imageCaptionHeader: "Trade NFTs without losing exposure to yield",
      imageCaptionDescription:
        "When a sale is initiated, Fuku will unwind your position and complete the transaction",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Section
        className="app-section"
        header="What is Fuku"
        content="Fuku Marketplace is a decentralized marketplace that allows buyers to place bids on NFTs while the underlying assets on their bids are earning yield by farming various DeFi protocols.This solves the problem in existing NFT markets where ETH used for bidding is locked up as an idle asset."
      />
      <Section
        className="app-section"
        header="How it Works"
        content={<CaptionedImageList captionedImages={captionedImagesList} />}
      />
      <Section
        className="app-section"
        header="Use your DeFi apps funds to buy and trade NFT assets"
        content={
          <div className="app__defi-apps">
            <DefiApps />
          </div>
        }
        isCentered={true}
      />
    </div>
  );
}

export default App;
