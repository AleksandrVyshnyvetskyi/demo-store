import styles from '../../styles/Footer.module.css';

const InstaIcon = () => {
  return (
    <svg
      className={styles.instaIcon}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 31H9c-4.4 0-8-3.6-8-8V9c0-4.4 3.6-8 8-8h14c4.4 0 8 3.6 8 8v14c0 4.4-3.6 8-8 8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <circle
        cx="16"
        cy="16"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <circle
        cx="24"
        cy="7"
        r="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default InstaIcon;
