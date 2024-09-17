import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm transition-colors duration-300 font-semibold tracking-wide uppercase  rounded-full text-stone-600 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  ";
  const styles = {
    primary: base + "px-3 py-4 md:px-6 md:py-4 ",
    small: base + "py-2 px-4  md:px-5 md:py-2.5 text-xs",
    round: base + "py-1 px-2.5  md:px-3.5 md:py-2 text-sm",
    secondary:
      "px-3 py-2.5 text-sm md:px-6 md:py-4 border-2 border-stone-400  transition-colors duration-300 font-semibold tracking-wide uppercase  rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2  ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
