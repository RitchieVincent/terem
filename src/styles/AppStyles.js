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

  .carousel {
    width: 100%;
    position: relative;
  }

  .carousel__inner-slide {
    width: calc(100% - 20px);
    overflow: hidden;
  }

  .carousel__next-button,
  .carousel__back-button {
    position: absolute;
    top: 0;
    bottom: 0;
    border: 0;
    width: 60px;

    &:disabled {
      opacity: 0;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .carousel__next-button {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) -20%,
      rgba(255, 255, 255, 1) 80%
    );
    opacity: 0.9;
  }

  .carousel__back-button {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 20%,
      rgba(0, 0, 0, 0) 120%
    );
    opacity: 0.9;
  }
`;

export const FeaturedContainer = styled.div`
  display: flex;
`;

export const TitleElement = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
`;
