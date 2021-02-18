/** @jsxImportSource @emotion/react */

import { ReactComponent as Icon } from "../images/mapIcon.svg";
import theme from "../theme";
import {
  CardComponent,
  CardImage,
  CardLower,
  CardTitle,
  CardLocation,
} from "../styles/CardStyles";

type Props = { title: string; img: string; location: string; large?: Boolean };
function Card({ title, img, location, large }: Props) {
  return (
    <CardComponent css={large ? { minWidth: "300px" } : null}>
      <CardImage src={img} alt={title} />
      <CardLower>
        <CardTitle>{title}</CardTitle>
        <CardLocation>
          <Icon
            css={{
              width: "15px",
              height: "15px",
              fill: theme.fontColourSecondary,
              marginRight: "5px",
            }}
          />
          {location}
        </CardLocation>
      </CardLower>
    </CardComponent>
  );
}

export default Card;
