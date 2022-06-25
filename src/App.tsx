import React from "react";
import "./App.scss";
import {
    DefiApps,
    EtherBox,
    EtherMarket,
    EtherPhone,
    PurpleOvals,
} from "./assets";
import {CaptionedImageProps} from "./components/CaptionedImage";
import {CaptionedImageList} from "./components/CaptionedImageList/CaptionedImageList";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";
import DefiAppsHorizontal from "./assets/defi-apps-horizontal.png";
import {Partners} from "./components/Partners";
import {Punks} from "./components/Punks";
import {AlphaLogo} from "./assets";
import NFTTech from "./assets/nft-tech-logo.gif";

function App() {
    const captionedImagesList: CaptionedImageProps[] = [
        {
            image: <EtherPhone/>,
            imageCaptionHeader: "Sellers list the NFT for sale",
            imageCaptionDescription:
                "Decide a max time period, NFT selling price and Fuku will suggest the best possible option price",
        },
        {
            image: <EtherMarket/>,
            imageCaptionHeader: "Buyers accept seller terms or place counteroffers",
            imageCaptionDescription:
                "Buyers submit offers to sellers specifying their preferred option duration, NFT sale price and how much they're  willing to pay for the option",
        },
        {
            image: <EtherBox/>,
            imageCaptionHeader: "ERC721 option positions are instantly tradeable",
            imageCaptionDescription:
                "Upon a succesful trade, option owners can pay the sellers to claim the NFT or can sell their options on popular marketplaces like Opensea",
        },
    ];

    return (
        <div className="App">
            <Navbar/>
            <div className="app__content">
                <div className="app__header-container">
                    <Punks className="app__header-punks"/>
                    <div className="app__header-content">
                        <h1 className="app__header">
                            Trade <span className="app__header-purple">Options</span> on any
                            <span className="app__header-purple"> NFT</span>
                        </h1>
                        <div className="app__caption">
                            Sell options on NFTs you own and earn fees every time those options trade on secondary
                            marketplaces like Opensea
                        </div>
                    </div>
                </div>
                <Section
                    className="app-section"
                    header="What is Fuku"
                    isText={true}
                    content={
                        <p>
                            Fuku is a decentralized options on NFTs protocol that allows buyers to pay sellers a
                            small premium in order to acquire the right to purchase NFT at a later date in the
                            future. It's Buy Now Pay Later for NFTs.
                        </p>
                    }
                />
                <Section
                    className="app-section"
                    header="What is Fuku solving"
                    isText={true}
                    content={
                        <p>
                            An overwhelming majority of users cannot afford to buy premium NFTs reducing market
                            liquidity and price discovery. With options, buyers need a much smaller capital outlay to
                            secure exposure to the NFT. Because these options trade at a much lower price than the
                            underlying NFT, they are much more liquid on secondary marketplaces like Opensea.
                        </p>
                    }
                />
                <div className="app-section how-it-works">
                    <Section
                        className="app-section__how-it-works-section"
                        header="How it Works"
                        content={
                            <CaptionedImageList captionedImages={captionedImagesList}/>
                        }
                    />
                    <PurpleOvals className="app-section__purple-ovals"/>
                </div>
                <Section
                    className="app-section defi-apps"
                    header="Use your DeFi assets to buy and trade NFTs"
                    content={
                        <div className="app__defi-apps">
                            <DefiApps className="app__defi-apps-logo-xs"/>
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
                    smallPadding={true}
                    header="Meet our partners"
                    content={
                        <Partners
                            partners={[
                                {
                                    logo: (
                                        <img
                                            src={NFTTech}
                                            alt="nft-tech"
                                            style={{maxWidth: "70%"}}
                                        />
                                    ),
                                    link: "https://www.nfttech.com/",
                                },
                            ]}
                        />
                    }
                    isCentered={true}
                />
                <Section
                    className="app-section"
                    smallPadding={true}
                    header="Incubated by"
                    content={
                        <Partners
                            partners={[
                                {
                                    logo: <AlphaLogo/>,
                                    link: "https://alphafinance.io/",
                                },
                            ]}
                        />
                    }
                    isCentered={true}
                />
            </div>
            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
