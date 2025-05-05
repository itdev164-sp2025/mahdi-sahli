import React from "react";
import styled from "styled-components";
import { Box } from "rebass/styled-components";

const StyledIcon = styled.div`
  width: ${({ iconSize }) => iconSize || "48px"};
  height: ${({ iconSize }) => iconSize || "48px"};
  margin-right: 8px;
`;

const BigIconButton = ({ icon: Icon, label, iconSize = "48px", ...props }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
    {...props}
  >
    <StyledIcon iconSize={iconSize}>
      <Icon size={iconSize} />
    </StyledIcon>
    {label}
  </Box>
);

export default BigIconButton;

