import styled from 'styled-components';
import { Button } from 'rebass';
import PropTypes from 'prop-types';

const Reset = styled(Button)`
  all: unset;
  box-sizing: border-box;
`;

const BaseButton = ({ children, ...rest }) => {
  return <Reset {...rest}>{children}</Reset>;
};

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseButton;
