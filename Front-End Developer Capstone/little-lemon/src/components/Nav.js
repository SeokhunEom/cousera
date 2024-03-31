function Nav() {
  return (
    <div>
      <img src="/assets/Logo.svg" alt="little-lemon logo" />
      <nav>
        <ul>
          {navMenu.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

const navMenu = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Menu",
    link: "",
  },
  {
    name: "Reservations",
    link: "",
  },
  {
    name: "Order Online",
    link: "",
  },
  {
    name: "Login",
    link: "",
  },
];
