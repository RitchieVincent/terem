import React, { useState, useEffect } from 'react';
import Search from "./components/Search";
import Card from "./components/Card";
import {AppContainer, Container, PanelContainer, TitleElement, PopularContainer, FeaturedContainer} from './styles/AppStyles';

interface IEvent {
  title: string;
  img: string;
  location: string;
}

function App() {
  const [popularData, setPopularData] = useState<IEvent[]>([]);
  const [featuredData, setFeaturedData] = useState<IEvent[]>([]);
  const [query, setQuery] = useState('');
  let [popularList, setPopularList] = useState<IEvent[]>([]);

  const queryUpdate = (e : any) => setQuery(e.target.value);

  useEffect(() => {
    const fetchPopular = async () => {
      await fetch('http://demo3136867.mockable.io/carousel')
      .then(response => response.json())
      .then(data => {
        setPopularData(data.data);
        setPopularList(data.data);
      });
    };

    const fetchFeatured = async () => {
      await fetch('http://demo3136867.mockable.io/featured')
      .then(response => response.json())
      .then(data => setFeaturedData(data.data));
    };
 
    fetchPopular();
    fetchFeatured();
  }, []);

  useEffect(() => {
    if(query) {
      const results = popularData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
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
              {popularList.length ? popularList.map((item, index) => 
                <Card key={index} title={item.title} img={item.img} location={item.location} large></Card>
              ) : 'No results!'}
            </PopularContainer>

            <TitleElement>Featured</TitleElement>
            <FeaturedContainer>
              {featuredData.length ? featuredData.map((item, index) => 
                <Card key={index} title={item.title} img={item.img} location={item.location}></Card>
              ) : 'No results!'}
            </FeaturedContainer>

        </PanelContainer>
      </Container>
    </AppContainer>
  );
}

export default App;
