interface ButtonProps {
  href?: string;
  target?: string;
  label?: string;
  icon?: string;
  classes?: string;
}

export default function ButtonPrimary({
  href,
  target,
  label,
  icon,
  classes,
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded"> {icon}</span>
        ) : undefined}{" "}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded"> {icon}</span>
        ) : undefined}
      </button>
    );
  }
}
export function ButtonOutline({
  href,
  target,
  label,
  icon,
  classes,
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded"> {icon}</span>
        ) : undefined}{" "}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded"> {icon}</span>
        ) : undefined}
      </button>
    );
  }
}
