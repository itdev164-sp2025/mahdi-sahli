import React from "react";
import { Heading } from "rebass";
import PropTypes from "prop-types";

const BaseHeading = ({ children, ...rest }) => (
  <Heading {...rest}>{children}</Heading>
);

BaseHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseHeading;
