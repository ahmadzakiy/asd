import React, { Component } from "react";
import styled from "styled-components";

import Card from "./components/Card";
import Modal from "./components/Modal";

import Image from "./assets/image.jpg";

const product = {
  image: Image,
  title: "Bose SoundLink",
  shortDesc: "Little speaker. Big goosebumps.",
  fullDesc: "Wireless earphones for music lovers who live to move.",
  price: "$ 199",
  caption: "Best Seller",
  specification: [
    "Up to 8 hours playtime",
    "Powerful sound",
    "Wireless earphones"
  ],
  features: ["Bumpers from bumping", "All sound, No Seam", "Grab and go"],
  colors: [
    {
      color: "#dadada",
      isActive: true
    },
    {
      color: "#3c3c3c",
      isActive: false
    },
    {
      color: "#d9b664",
      isActive: false
    }
  ],
  notes: "Free shipping & returns + 2 year warranty"
};

class App extends Component {
  state = {
    showModal: false
  };

  handleOnState = state => {
    this.setState(state);
  };

  render() {
    const { showModal } = this.state;

    console.log("DATA PRODUCT: ", product);

    return (
      <Wrapper>
        <Card
          onState={this.handleOnState}
          productImage={product.image}
          productTitle={product.title}
          productDesc={product.shortDesc}
          productPrice={product.price}
          productCaption={product.caption}
        />
        <Modal
          isShow={showModal}
          onState={this.handleOnState}
          productImage={product.image}
          productTitle={product.title}
          productDesc={product.fullDesc}
          productPrice={product.price}
          productCaption={product.caption}
          productSpecification={product.specification}
          productFeatures={product.features}
          productColors={product.colors}
          sellerNotes={product.notes}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
`;

export default App;
