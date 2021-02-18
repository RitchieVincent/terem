import styled from "@emotion/styled";
import theme from "../theme";

export const AppContainer = styled.div`
  background-color: ${theme.bgColour};
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${theme.fontColourPrimary};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const PanelContainer = styled.div`
  padding: 20px;
  background-color: ${theme.panelBg};
`;

export const PopularContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  overflow: scroll;
`;

export const FeaturedContainer = styled.div`
  display: flex;
`;

export const TitleElement = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
`;
