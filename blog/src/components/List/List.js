import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

export const List = ({ children, ...rest }) => (
  <BaseContainer as="ul" flex flexDirection="column" mx="auto" {...rest}>
    {children}
  </BaseContainer>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};
