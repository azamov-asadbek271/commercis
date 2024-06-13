import { NavLink } from "react-router-dom";
const links = [
  {
    id: 1,
    text: "Collections",
    link: "/collections",
  },
  {
    id: 2,
    text: "Men",
    link: "/men",
  },
  {
    id: 3,
    text: "Women",
    link: "/women",
  },
  {
    id: 4,
    text: "About",
    link: "/about",
  },
  {
    id: 5,
    text: "Contact",
    link: "/contact",
  },
];

function NavLinks() {
  return (
    <ul className="lg:flex mt-1">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              to={link.link}
              className="capitalize px-3  text-slate-500  hover:text-black transition duration-300"
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
