import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  const pantallaInicio = useMediaQuery({ query: "(max-width:479px)" });

  const pantallaMovil = useMediaQuery({ query: "(max-width:520px)" });
  const pantallaTablets = useMediaQuery({ query: "(max-width:640px)" });

  let sizePantalla = pantallaInicio
    ? "sm"
    : pantallaMovil
    ? "md"
    : pantallaTablets
    ? "lg"
    : "lg";
  useEffect(() => {
    // Función para manejar el cambio de hash
    const handleHashChange = () => {
      // Obtener el nuevo valor del hash
      const newHash = window.location.hash;

      // Actualizar el estado con el nuevo valor del hash
      setHash(newHash);
    };

    handleHashChange();

    // Agregar el event listener para el cambio de hash
    window.addEventListener("hashchange", handleHashChange);

    // Limpieza: remover el event listener al desmontar el componente
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hash]);

  const menuItems = [
    { item: "Inicio", url: "inicio" },
    { item: "Acerca de mí", url: "acerca-de" },
    { item: "Experiencia", url: "experiencia" },
    { item: "Educación", url: "educacion" },
    { item: "Portafolio", url: "portafolio" },
  ];

  return (
    <Navbar
      isMenuDefaultOpen={false}
      onMenuOpenChange={setIsMenuOpen}
      className="p-1"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <a href="/" className="flex justify-center items-center">
            <img
              className=" min-w-48 max-w-56 w-48 p-1"
              src="/img/imgLogo.svg"
              alt="Logo "
            />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((myItem, index) => (
          <NavbarItem key={`${myItem.item}-${index}`}>
            <Link
              color={hash === `#${myItem.url}` ? "primary" : "foreground"}
              className={`${
                hash === `#${myItem.url}` ? "font-bold" : "font-thin"
              }`}
              href={`#${myItem.url}`}
            >
              {Object.values(myItem.item)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((itemNavbar, index) => (
          <NavbarMenuItem key={`${itemNavbar.item}-${index}`}>
            <Link
              color={`${
                hash === "#" + itemNavbar.url ? `primary` : "foreground"
              }`}
              className={`w-full ${
                hash === "#" + itemNavbar.url
                  ? `font-bold uppercase`
                  : "font-medium"
              }`}
              href={`#${itemNavbar.url}`}
              size={sizePantalla}
            >
              {Object.values(itemNavbar.item)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
