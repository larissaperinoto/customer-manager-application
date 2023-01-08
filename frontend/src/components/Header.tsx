import "../style/Header.css";

export default function Header() {
  function leave() {
    localStorage.setItem("token", "");
  }

  return (
    <header>
      <a href="/users">Users</a>
      <a href="/dogs">Dogs</a>
      <a href="/cats">HttpCats</a>
      <a href="/clients">Clientes</a>
      <a href="/Login" onClick={() => leave()}>
        Sair
      </a>
    </header>
  );
}
