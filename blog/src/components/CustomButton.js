import styled from "styled-components";
import { Button } from "rebass/styled-components";

const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

export default CustomButton;
