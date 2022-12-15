import NavSubMenu from "./NavSubMenu";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <>
      {true ? (
        <button></button>
      ) : (
        <nav className="w-[200px">
          <ul>
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
          </ul>
        </nav>
      )}
    </>
  );
}
