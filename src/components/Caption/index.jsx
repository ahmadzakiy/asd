import React, { PureComponent } from "react";
import { string } from "prop-types";
import styled from "styled-components";

class Caption extends PureComponent {
  static propTypes = {
    caption: string
  };

  render() {
    const { caption } = this.props;

    return <Wrapper>{caption}</Wrapper>;
  }
}

const Wrapper = styled.span`
  position: absolute;
  top: 36px;
  left: 0px;
  padding: 8px 16px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #fce64c;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
`;

export default Caption;
