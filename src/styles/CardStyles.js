import styled from "@emotion/styled";
import theme from "../theme";

export const CardComponent = styled.div`
  border: 1px solid ${theme.bgColour};
  width: 220px;
  background-color: #f1f0f0;

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const CardImage = styled.img`
  display: flex;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardLower = styled.div`
  padding: 10px 15px;
  border-top: 1px solid ${theme.bgColour};
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 12px;
  color: ${theme.fontColourPrimary};
  margin-bottom: 5px;
`;

export const CardLocation = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.fontColourSecondary};
  font-size: 12px;
`;
