import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classNam = "text-sm text-blue-500 hover:text-blue-600";
  if (to === "-1")
    return (
      <button className={classNam} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={classNam}>
      &larr; Back to menu
    </Link>
  );
}

export default LinkButton;
