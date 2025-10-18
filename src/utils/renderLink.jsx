import { Link } from "react-router-dom";

export const renderLink = (name, url, className = "") => {
  const isExternal = url.startsWith("http");

  return isExternal ? (
    <a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {name}
    </a>
  ) : (
    <Link key={name} to={url} className={className}>
      {name}
    </Link>
  );
};
