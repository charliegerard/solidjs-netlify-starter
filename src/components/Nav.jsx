import styles from "./Nav.module.css";

const Nav = ({ setView, view }) => {
  const menuOptions = ["all", "to do", "completed"];

  return (
    <section class={styles.Nav}>
      {menuOptions.map((option) => (
        <button
          style={{ "font-weight": `${view() === option ? `bold` : ""}` }}
          onClick={() => setView(option)}
        >
          {option}
        </button>
      ))}
    </section>
  );
};

export default Nav;
