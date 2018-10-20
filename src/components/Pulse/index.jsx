import React, { PureComponent } from "react";
import { bool } from "prop-types";
import styled from "styled-components";

class Pulse extends PureComponent {
  static propTypes = {
    showPulse: bool
  };

  render() {
    const { showPulse } = this.props;

    return showPulse && <Wrapper />;
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: #fde739;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(253, 231, 57, 0.7);
  animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);

  :hover {
    animation: none;
  }

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 25px rgba(253, 231, 57, 0);
    }
  }
`;

export default Pulse;
