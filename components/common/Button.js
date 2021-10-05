import Link from "next/link";

const Button = ({ children, ...props }) => {
  let baseColor = props.color || "blue",
    textClass = props.inverted ? `text-${baseColor}-500` : "text-white",
    textHoverClass = "hover:text-white",
    backgroundClass = props.inverted ? "bg-transparent" : `bg-${baseColor}-500`,
    backgroundHoverClass = props.inverted
      ? `hover:bg-${baseColor}-500`
      : `hover:bg-${baseColor}-600`,
    focusClasses = `focus:outline-none focus:ring focus:ring-${baseColor}-500 focus:ring-opacity-50`,
    disabledClasses = ``, // TODO
    classNames = `${textClass} ${textHoverClass} ${backgroundClass} ${backgroundHoverClass} ${focusClasses} rounded-full w-24 min-w-max px-6 py-2 text-center font-bold uppercase hover:no-underline`;

  if (props.asLink)
    return (
      <Link passHref href={props.href}>
        <a className={classNames}>{children}</a>
      </Link>
    );
  return (
    <button className={classNames} props>
      {children}
    </button>
  );
};

export default Button;
