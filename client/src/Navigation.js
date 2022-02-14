import styles from "./Navigation.module.css";

const Navigation = ({ activePane, onClick }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <NavigationButton
          active={activePane === "search"}
          onClick={() => onClick("search")}
        >
          Rechercher un livre
        </NavigationButton>
        <NavigationButton
          active={activePane === "add"}
          onClick={() => onClick("add")}
        >
          Encoder un livre
        </NavigationButton>
      </div>
    </div>
  );
};

const NavigationButton = ({ active = false, onClick, children }) => {
  const cssClasses = active
    ? `${styles.active} ${styles.navigationButton}`
    : styles.navigationButton;
  return (
    <button className={cssClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Navigation;
