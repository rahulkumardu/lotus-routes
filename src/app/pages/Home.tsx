import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { PopularExperiences } from '../components/PopularDestinations';

export function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <PopularExperiences />
    </>
  );
}
