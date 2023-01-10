import { Button, Link, Toolbar } from "@mui/material";
import headerNav from "../services/headerNav";
import "../style/Header.css";

export default function Header() {
  function leave() {
    localStorage.setItem("token", "");
  }

  return (
    <header>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        {headerNav.map(({ href, label }, index) => (
          <Button variant="text">
            <Link
              href={href}
              color="black"
              variant="body1"
              underline="none"
              key={index}
            >
              {label}
            </Link>
          </Button>
        ))}
        <Button variant="text">
          <Link
            href="/Login"
            onClick={() => leave()}
            color="black"
            variant="body1"
            underline="none"
          >
            Sair
          </Link>
        </Button>
      </Toolbar>
    </header>
  );
}
