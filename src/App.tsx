import React from "react";
import "./App.scss";
import {
  DefiApps,
  EtherBox,
  EtherMarket,
  EtherPhone,
  PurpleOvals,
} from "./assets";
import { CaptionedImageProps } from "./components/CaptionedImage";
import { CaptionedImageList } from "./components/CaptionedImageList/CaptionedImageList";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import DefiAppsHorizontal from "./assets/defi-apps-horizontal.png";
import { Partners } from "./components/Partners";
import { Punks } from "./components/Punks";

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
      <div className="app__content">
        <div className="app__header-container">
          <Punks className="app__header-punks" />
          <div className="app__header-content">
            <h1 className="app__header">
              Earn <span className="app__header-purple">DeFi</span> yields while
              trading <span className="app__header-purple">NFTs</span>
            </h1>
            <div className="app__caption">
              Plug into DeFi and NFTs at the same time
            </div>
          </div>
        </div>
        <Section
          className="app-section"
          header="What is Fuku"
          isText={true}
          content={
            <React.Fragment>
              <p>
                Fuku is a decentralized marketplace that allows buyers to place
                bids on NFTs while the underlying assets on their bids are
                earning yield by farming various DeFi protocols.
              </p>
            </React.Fragment>
          }
        />
        <Section
          className="app-section"
          header="What is Fuku solving"
          isText={true}
          content={
            <React.Fragment>
              <p>
                Fuku solves the problem in existing NFT marketplaces where the
                ETH used for bidding is locked up as an idle asset. Fuku allows
                users to remain in their favourite DeFi assets while trading
                NFTs.
              </p>
            </React.Fragment>
          }
        />
        <div className="app-section how-it-works">
          <Section
            className="app-section__how-it-works-section"
            header="How it Works"
            content={
              <CaptionedImageList captionedImages={captionedImagesList} />
            }
          />
          <PurpleOvals className="app-section__purple-ovals" />
        </div>
        <Section
          className="app-section defi-apps"
          header="Use your DeFi assets to buy and trade NFTs"
          content={
            <div className="app__defi-apps">
              <DefiApps className="app__defi-apps-logo-xs" />
              <img
                src={DefiAppsHorizontal}
                className="app__defi-apps-logo-lg"
              />
            </div>
          }
          isCentered={true}
        />
        <Section
          className="app-section"
          header="Meet our partners"
          content={<Partners />}
          isCentered={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
