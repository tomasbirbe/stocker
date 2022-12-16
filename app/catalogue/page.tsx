export default function Catalogue() {
  return (
    <main>
      <div className="mt-[60px]">
        <ul className="grid grid-cols-12 bg-blue-500" id="theader">
          <li className="bg-red-500 col-span-9">Producto</li>
          <li className="bg-green-500 col-span-3">Cantidad</li>
        </ul>
        <ul className="grid grid-cols-12 bg-blue-500" id="tbody">
          <li className="bg-red-500 col-span-9">Samsung 520</li>
          <li className="bg-green-500 col-span-3">2</li>
        </ul>
      </div>
    </main>
  );
}
