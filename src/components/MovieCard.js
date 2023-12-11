'use client'

import Link from 'next/link';
import styles from './MovieCard.module.css'
import { useScreenDetector } from '@/hooks/useScreenDetector';
import Image from 'next/image';

const MovieCard = ({ initialMovies, randomInitialQuery, paginationMovies }) => {
const { isMobile } = useScreenDetector()
const [movies, setMovies] = useState([])

  return (
    <>
      <aside className={styles.pagButtonsContainer}>
        <button className={styles.pagButtons}>1</button>
        <button className={styles.pagButtons}>2</button>
      </aside>
      <div className={styles.cardMovies}>
        {initialMovies?.Search?.map((movie) => {
          return (
            <section key={movie.imdbID} className={styles.movieContainer}>
              <Link href={`/movie/${movie.imdbID}`} passHref>
                <Image
                  src={movie.Poster}
                  quality={100}
                  width={!isMobile ? 280 : 180}
                  height={!isMobile ? 280 : 180}
                />
                <p>{movie.Title}</p>
              </Link>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
