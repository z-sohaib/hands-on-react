import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

function Header({ user }) {
  return <div>{user ? <LoggedIn name={user} /> : <LoggedOut />}</div>;
}

export default Header;
