import React, { Component } from "react";
import { string, bool, array, arrayOf, object, func } from "prop-types";
import styled from "styled-components";

import Caption from "../Caption";

import Image from "../../assets/image.jpg";
import IconCheck from "../../assets/check.svg";
import IconCart from "../../assets/cart.svg";

class Modal extends Component {
  state = {
    showFirstTab: true,
    showSecondTab: false
  };

  static propTypes = {
    onState: func,
    isShow: bool,
    productTitle: string,
    productDesc: string,
    productPrice: string,
    productCaption: string,
    productSpecification: array,
    productColors: arrayOf(object)
  };

  handleCloseModal = () => {
    const { onState } = this.props;
    onState({ showModal: false });
  };

  handleChangeFirstTab = () => {
    this.setState({
      showFirstTab: true,
      showSecondTab: false
    });
  };

  handleChangeSecondTab = () => {
    this.setState({
      showFirstTab: false,
      showSecondTab: true
    });
  };

  render() {
    const { showFirstTab, showSecondTab } = this.state;
    const {
      isShow,
      productTitle,
      productDesc,
      productPrice,
      productCaption,
      productSpecification,
      productFeatures,
      productColors,
      sellerNotes
    } = this.props;

    return isShow ? (
      <Wrapper>
        <Content>
          <Sidebar>
            <img src={Image} alt={productTitle} />
            <Caption caption={productCaption} />
          </Sidebar>
          <Body>
            <div className="title">
              <h1>{productTitle}</h1>
              <h2>{productPrice}</h2>
              <p>{productDesc}</p>
            </div>

            <Tab>
              <TabHeader>
                <span
                  className={showFirstTab ? "tab-active" : ""}
                  onClick={this.handleChangeFirstTab}
                >
                  Specification
                </span>
                <span
                  className={showSecondTab ? "tab-active" : ""}
                  onClick={this.handleChangeSecondTab}
                >
                  Features
                </span>
              </TabHeader>
              {showFirstTab ? (
                <TabBody>
                  <Card>
                    {productSpecification.map((value, index) => {
                      return (
                        <List key={index}>
                          <img src={IconCheck} alt="icon check" />
                          <span>{value}</span>
                        </List>
                      );
                    })}
                  </Card>
                  <Card>
                    <h3>Choose your colors</h3>
                    <ColorsWrapper>
                      {productColors.map((value, index) => {
                        return (
                          <Color
                            key={index}
                            color={value.color}
                            isActive={value.isActive}
                          />
                        );
                      })}
                    </ColorsWrapper>
                  </Card>
                </TabBody>
              ) : null}
              {showSecondTab ? (
                <TabBody>
                  <Card>
                    {productFeatures.map((value, index) => {
                      return (
                        <List key={index}>
                          <img src={IconCheck} alt="icon check" />
                          <span>{value}</span>
                        </List>
                      );
                    })}
                  </Card>
                </TabBody>
              ) : null}
            </Tab>

            <Card>
              <List>
                <img src={IconCheck} alt="icon check" />
                <span>{sellerNotes}</span>
              </List>
            </Card>

            <Cart>
              <CartIcon>
                <img src={IconCart} alt="icon card" />
              </CartIcon>
              <BuyNow>Buy Now</BuyNow>
            </Cart>
          </Body>
        </Content>
        <CloseWrapper onClick={this.handleCloseModal} />
      </Wrapper>
    ) : null;
  }
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 500px;
  background: #ffffff;
  padding: 36px 0;
  border-radius: 8px;
`;

const Sidebar = styled.div`
  width: 400px;
  padding: 54px 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 36px;

  .title {
    margin-bottom: 8px;

    h1 {
      font-size: 24px;
      margin: 0;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 24px;
      font-weight: normal;
      margin: 0;
      margin-bottom: 8px;
    }

    p {
      font-family: "Gotham-Light", sans-serif;
      font-size: 20px;
      color: #969696;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid #e2e2e2;

  h3 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 8px;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
`;

const TabHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e2e2e2;

  span {
    color: #e2e2e2;
    margin-right: 24px;
    cursor: pointer;
  }

  .tab-active {
    color: #434343 !important;
    padding-bottom: 8px;
    border-bottom: 4px solid #fce64c;
  }
`;

const TabBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 0;

  img {
    margin-right: 16px;
    width: 16px;
    height: auto;
  }

  span {
    font-family: "Gotham-Light", sans-serif;
    color: #969696;
  }
`;

const ColorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Color = styled.div`
  cursor: pointer;
  margin-right: 8px;
  border-radius: 50%;
  ${props => props.color && `background: ${props.color}`};
  ${props => (props.isActive ? `width: 18px` : `width: 14px`)};
  ${props => (props.isActive ? `height: 18px` : `height: 14px`)};
`;

const Cart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 36px;
`;

const CartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e2e2e2;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 40px;
  height: 30px;
  background: #3d3d3d;
`;

const BuyNow = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 14px;
  font-family: "Gotham-Medium", sans-serif;
  min-width: 90px;
  height: 30px;
  background: #3d3d3d;
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
`;

export default Modal;
