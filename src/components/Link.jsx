import N from "next/link";

const Link = ({ href, children, ...props }) => {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <N href={href} {...props}>
      {children}
    </N>
  );
};

export default Link;
