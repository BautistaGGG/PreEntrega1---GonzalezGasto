/* eslint-disable react/prop-types */

import ItemCount from "./ItemCount"

function ItemListContainer({greeting}) {

  return (
    <section className="bg-slate-500 text-center">
        <h1 className="p-4">
          {greeting}
          <ItemCount/>
        </h1>
    </section>
  )
}

export default ItemListContainer

/*
Contador con botón

Crea un componente ItemCount.js, que debe estar compuesto de un
botón y controles, para incrementar y decrementar la cantidad
requerida de ítems

El número contador nunca puede superar el stock disponible.
De no haber stock el click no debe tener efecto y por ende 
no ejecutar el callback onAdd.
Si hay stock al clickear el botón se debe ejecutar onAdd
con un número que debe ser la cantidad seleccionada por el usuario.

Catálogo con MAPS y promises

Crea los componentes: 
  -Item.js e 
  -ItemList.js 
para mostrar algunos productos en tu ItemListContainer.js. 
Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo
diferido (setTimeout) de 2 segundos, para emular retrasos de red

Recomendaciones:
  Item.js: Es un componente destinado a mostrar información breve del producto
  que el user clickeará luego para acceder a los detalles (los desarrollaremos más
  adelante)
  ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo
  dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
  Implementa un async mock (promise): Usa un efecto de montaje para poder emitir
  un llamado asincrónico a un mock (objeto) estático de datos que devuelva un
  conjunto de item { id, title, description, price, pictureUrl } en dos segundos
  (setTimeout), para emular retrasos de red.

*/