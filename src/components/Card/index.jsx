import React, { Component } from "react";
import { string, func } from "prop-types";
import styled from "styled-components";

import Pulse from "../Pulse";
import Caption from "../Caption";

import IconDetail from "../../assets/quicklook.svg";

class Card extends Component {
  state = {
    isShow: true
  };

  static propTypes = {
    onState: func,
    productImage: string,
    productTitle: string,
    productDesc: string,
    productPrice: string,
    productCaption: string
  };

  handleShowDetail = () => {
    const { onState } = this.props;
    onState({
      showModal: true
    });
    this.setState({
      isShow: false
    });
  };

  render() {
    const { isShow } = this.state;
    const {
      productImage,
      productTitle,
      productDesc,
      productPrice,
      productCaption
    } = this.props;

    return (
      <Wrapper>
        <Header>
          <img src={productImage} alt={productTitle} />
          <Caption caption={productCaption} />
        </Header>
        <Body>
          <h1>{productTitle}</h1>
          <p>{productDesc}</p>
        </Body>
        <Footer>
          <QuickLook onClick={this.handleShowDetail}>
            <img src={IconDetail} alt="detail icon" />
            <Pulse showPulse={isShow} />
          </QuickLook>
          <PriceTag>{productPrice}</PriceTag>
        </Footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  background: #ffffff;
  border-radius: 8px;
  transition: box-shadow 0.35s ease-out, transform 0.3s ease-out,
    opacity 0.2s ease-out;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transform: translate(0, -4px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  width: 300px;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;

  h1 {
    font-size: 16px;
    margin: 0;
    margin-bottom: 5px;
  }

  p {
    font-family: "Gotham-Light", sans-serif;
    font-size: 16px;
    margin: 0;
    color: #969696;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`;

const QuickLook = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 50px;
  height: 30px;
  position: relative;
`;

const PriceTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 14px;
  font-family: "Gotham-Medium", sans-serif;
  min-width: 40px;
  height: 30px;
  padding: 0 10px;
`;

export default Card;
