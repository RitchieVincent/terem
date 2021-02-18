import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import {
  AppContainer,
  Container,
  PanelContainer,
  TitleElement,
  PopularContainer,
  FeaturedContainer,
} from "./styles/AppStyles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ReactComponent as PrevChev } from "./images/chevronLeft.svg";
import { ReactComponent as NextChev } from "./images/chevronRight.svg";

interface IEvent {
  title: string;
  img: string;
  location: string;
}

function App() {
  const [popularData, setPopularData] = useState<IEvent[]>([]);
  const [featuredData, setFeaturedData] = useState<IEvent[]>([]);
  const [query, setQuery] = useState("");
  const [popularList, setPopularList] = useState<IEvent[]>([]);

  const queryUpdate = (e: any) => setQuery(e.target.value);

  useEffect(() => {
    const fetchPopular = async () => {
      await fetch("https://demo3136867.mockable.io/carousel")
        .then((response) => response.json())
        .then((data) => {
          setPopularData(data.data);
          setPopularList(data.data);
        });
    };

    const fetchFeatured = async () => {
      await fetch("https://demo3136867.mockable.io/featured")
        .then((response) => response.json())
        .then((data) => setFeaturedData(data.data));
    };

    fetchPopular();
    fetchFeatured();
  }, []);

  useEffect(() => {
    if (query) {
      const results = popularData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setPopularList(results);
    } else {
      setPopularList(popularData);
    }
  }, [query, popularData]);

  return (
    <AppContainer>
      <Container>
        <Search query={query} queryUpdate={queryUpdate}></Search>
        <PanelContainer>
          <TitleElement>Popular around you</TitleElement>
          <PopularContainer>
            <CarouselProvider
              naturalSlideWidth={260}
              naturalSlideHeight={205}
              totalSlides={popularList.length}
              visibleSlides={3.5}
            >
              <Slider>
                {popularList.length
                  ? popularList.map((item, index) => (
                      <Slide index={index} key={index}>
                        <div className="test">
                          <Card
                            title={item.title}
                            img={item.img}
                            location={item.location}
                            large
                          ></Card>
                        </div>
                      </Slide>
                    ))
                  : "No results!"}
              </Slider>
              <ButtonBack>
                <PrevChev></PrevChev>
              </ButtonBack>
              <ButtonNext>
                <NextChev></NextChev>
              </ButtonNext>
            </CarouselProvider>
          </PopularContainer>

          <TitleElement>Featured</TitleElement>
          <FeaturedContainer>
            {featuredData.length
              ? featuredData.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    img={item.img}
                    location={item.location}
                  ></Card>
                ))
              : "No results!"}
          </FeaturedContainer>
        </PanelContainer>
      </Container>
    </AppContainer>
  );
}

export default App;
