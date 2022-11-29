import { useState } from 'react';


import styleclass from "../NewServiceForm/NewServiceForm.module.scss"
import Button from "../Button/Button"

const NewServiceForm = ({ onAddPost = () => { } }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault(); /* EVITA RECARGAR LA PAGINA AL GUARDAR */

        const data = new FormData(e.target);

        console.log({
            category: data.get("category"),
            name_service: data.get("name_service"),
            address: data.get("address"),
            img_url: data.get("img_url")
        });

        /* AÑADIR EL POST A LA LISTA */

        onAddPost(data.get("category"), data.get("name_service"), data.get("address"), data.get("img_url"));
    }


    return (
        <section className={styleclass["service-form-section"]}>

            <h2>Agregar nuevo servicio para reseñas</h2>

            <form onSubmit={onSubmitHandler}>

                <select name="category" placeholder='Seleciona una categoria' >
                    <option value="restaurante">Restaurante</option>
                    <option value="hotel">Hoteles</option>
                    <option value="hospital">Hospitales</option>
                    <option value="servipubli">Servicio Publico</option>
                    <option value="construc">Construccion</option>
                    <option value="otro">Otro</option>
                </select>
                <input type="text" name="name_service" placeholder='registra el nombre de tu servicio' />
                <input type="text" name="address" placeholder='registra la direccion del servicio' />
                <input type="url" name="img_url" placeholder='ingresa una imagen en formato url' />

                <div className={styleclass["save_form"]}>
                    <Button type="submit" /* disabled={hasErrors()} */>
                        Guardar
                    </Button >
                </div>

            </form>

        </section >
    )
}

export default NewServiceForm;