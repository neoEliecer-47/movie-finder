import styles from "../../src/features/HomePage.module.css";

const CameraMovie = () => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path className={styles.titleHome} d="M12 8C5.935 8 1 12.935 1 19L1 41C1 41.552 1.448 42 2 42L38 42C44.065 42 49 37.065 49 31L49 9C49 8.448 48.552 8 48 8L12 8 z M 16.042969 18L17.994141 18L23.154297 32L20.955078 32L19.550781 28L14.484375 28L13.080078 32L10.882812 32L16.042969 18 z M 25 18L27.337891 18L32.027344 29.224609L36.703125 18L39 18L39 32L37 32L37 22.171875L32.875 32L31.181641 32L27 22.076172L27 32L25 32L25 18 z M 17.017578 20.765625L15.181641 26L18.855469 26L17.115234 21.039062L17.017578 20.765625 z"></path>
      </g>
    </svg>
  );
};

export default CameraMovie;
