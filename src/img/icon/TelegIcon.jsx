import styles from '../../styles/Footer.module.css';


const TelegIcon = () => {
  return (
    <svg
      className={styles.telegIcon}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.16 14.148l-71.047 29.57s-3.359 1.221-3.099 3.473c0.267 2.256 3.008 3.288 3.008 3.288l17.877 6.382s5.396 18.772 6.458 22.344c1.062 3.562 1.914 3.646 1.914 3.646 0.989 0.456 1.888-0.27 1.888-0.27l11.55-11.169L70.71 86.054c4.869 2.253 6.641-2.441 6.641-2.441L90 15.935c0-4.508-5.84-1.787-5.84-1.787zM71.582 78.17L52.324 62.51l-5.976 5.777 1.314-12.291 25.67-24.329L38.341 52.441l-15.521-5.54 59.217-24.648L71.582 78.17z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
};

export default TelegIcon;
