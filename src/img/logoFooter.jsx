import styles from '../styles/Footer.module.css';

const LogoFooter = () => {
  return (
    <svg
      className={styles.footerLogo}
      viewBox="-51.2 -51.2 614.40 614.40"
      width="25"
      height="25"
    >
      <g>
        <rect
          className={`${styles.svgBar} ${styles.svgBar1}`}
          x="36.198"
          y="438.857"
          width="438.857"
          height="73.143"
        />
        <rect
          className={`${styles.svgBar} ${styles.svgBar2}`}
          x="0.735"
          y="292.571"
          width="509.784"
          height="73.143"
        />
        <rect
          className={`${styles.svgBar} ${styles.svgBar3}`}
          x="109.334"
          y="148.502"
          width="292.571"
          height="73.143"
        />
        <rect
          className={`${styles.svgBar} ${styles.svgBar4}`}
          x="0.735"
          width="509.784"
          height="73.143"
        />
      </g>
      <g>
        <rect
          className={`${styles.svgBar} ${styles.svgBar5}`}
          x="256.373"
          y="438.857"
          width="219.429"
          height="73.143"
        />
        <rect
          className={`${styles.svgBar} ${styles.svgBar6}`}
          x="256.373"
          y="292.571"
          width="254.892"
          height="73.143"
        />
        <rect
          className={`${styles.svgBar} ${styles.svgBar7}`}
          x="256.373"
          y="148.502"
          width="146.286"
          height="73.143"
        />
        <rect
          className={`${styles.svgBar} ${styles.svgBar8}`}
          x="256.373"
          width="254.892"
          height="73.143"
        />
      </g>
    </svg>
  );
};

export default LogoFooter;
