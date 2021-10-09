import Link from "next/link"

const Button = ({ children, ...props }) => {
  let baseColor = props.color || "blue",
    textClass = props.inverted ? `text-${baseColor}-500` : "text-white",
    textHoverClass = "hover:text-white",
    backgroundClass = props.inverted ? "bg-white" : `bg-${baseColor}-500`,
    backgroundHoverClass = props.inverted
      ? `hover:bg-${baseColor}-500`
      : `hover:bg-${baseColor}-600`,
    focusClasses = `focus:outline-none focus:ring focus:ring-offset-${baseColor}-500 focus:ring-opacity-50`,
    activeClasses = props.inverted
      ? `active:border active:border-${baseColor}-500`
      : `active:bg-${baseColor}-600`,
    disabledClasses = `disabled:opacity-50 disabled:grayscale`,
    classNames = `
      ${textClass}
      ${textHoverClass}
      ${backgroundClass}
      ${backgroundHoverClass}
      ${focusClasses}
      ${activeClasses}
      ${disabledClasses}
      inline-flex items-center justify-center gap-1 ring-1 ring-${baseColor}-500 rounded-md w-24 min-w-max px-4 py-2 text-center text-sm font-medium text-center hover:no-underline
      `

  if (props.asLink)
    return (
      <Link href={props.href} passHref {...props}>
        <a className={classNames}>{children}</a>
      </Link>
    )
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default Button
