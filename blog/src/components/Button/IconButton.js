import React, { cloneElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseButton from './BaseButton';

const StyledButton = styled(BaseButton)`
  ${({ theme, variant }) => {
    const styles = theme?.variants?.iconButton?.[variant || 'primary'];
    return styles ? `
      background-color: ${styles.backgroundColor};
      color: ${styles.color};
    ` : '';
  }}
`;

const IconButton = ({ icon, ...rest }) => {
  const clonedIcon = cloneElement(icon, { ...rest });

  return (
    <StyledButton {...rest} className={rest.className}>
      {clonedIcon}
    </StyledButton>
  );
};

IconButton.defaultProps = {
  size: 24,
  variant: 'primary',
};

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default IconButton;
