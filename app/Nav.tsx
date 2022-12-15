import NavSubMenu from "./NavSubMenu";
import NavLink from "./NavLink";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen((prevState) => !prevState);
  }

  return (
    <>
      {isNavOpen ? (
        <nav className="w-[180px] absolute h-full top-0 left-0 dark:bg-dark">
          <div className="w-full pr-4 h-[50px] dark:bg-primary-dark flex justify-end">
            <button onClick={toggleNav}>
              <AiOutlineArrowLeft color="white" size={20} />
            </button>
          </div>
          <NavSubMenu className="pt-4">
            <NavLink href="/catalogue">Catalogo</NavLink>
            <NavSubMenu>
              <NavLink href="/catalogue/add">Agregar</NavLink>
              <NavLink href="/catalogue/delete">Borrar</NavLink>
            </NavSubMenu>
            <NavLink href="/stock">Stock</NavLink>
            <NavSubMenu>
              <NavLink href="/stock/add">Agregar</NavLink>
              <NavLink href="/stock/delete">Borrar</NavLink>
            </NavSubMenu>
          </NavSubMenu>
        </nav>
      ) : (
        <button className="absolute top-5 left-4 h-fit w-fit" onClick={toggleNav}>
          <AiOutlineMenu color="white" size={25} />
        </button>
      )}
    </>
  );
}
