import styles from "./Nav.module.css";

const Nav = ({ setView }) => {
  const menuOptions = ["all", "to do", "completed"];

  return (
    <section class={styles.Nav}>
      {menuOptions.map((option) => (
        <button onClick={() => setView(option)}>{option}</button>
      ))}
    </section>
  );
};

export default Nav;
