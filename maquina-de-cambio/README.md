# Máquina de cambio

- Vamos a hacer un algoritmo para devolver el cambio en los billetes/monedas mas grandes posibles en una tienda.
- Para ello vamos a tener el precio a pagar y el dinero entregado. De ahí saldrá el cambio.
- Por otro lado, vamos a tener un array con todos los billetes y monedas disponibles.
- Vamos a iterar por el array de bilestes/monedas desde el más grande al más pequeño, e iremos dividiendo el billete entre el cambio: si el cociente da 0, es que el billete/monedas es más grande y pasaríamos al siguiente del array. Si el cociente da 1 o más, será el nº de ese billete que habría que entregar y seguiriamos iterando con el resto de esa operación. Así hasta que el resto de 0.