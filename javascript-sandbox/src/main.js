import axios from "axios";
import "./style.css";

const eliminarPelicula = (id) => {
  fetch(`http://localhost:3000/noexiste/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
      } else {
        throw new Error("Error al eliminar la pelicula");
      }
    })
    .catch((error) => console.log(error));
};

try {
  eliminarPelicula("UFYui65");
} catch (error) {
  console.log(error);
}
