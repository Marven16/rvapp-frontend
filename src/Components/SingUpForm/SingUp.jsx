/* import styleclass from "../SingUpForm/SingUP.module.scss" */

const singUp = () => {
    return (
        <section>
            <div>
                <h2>Registrarse</h2>
            </div>
            <form action="">
                <label>Informacion de la cuenta</label>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="password" />
                    <input type="text" placeholder="nickname" />
                <label>Informacion del usuario</label>
                    <input type="text" placeholder="nombre" />
                    <input type="text" placeholder="apellido" />
                    <input type="date" placeholder="fecha de nacimiento" />

                <div /* className={styleclass["singup_form"]} */>
                    <Button type="submit">SingUP</Button >
                </div>
            </form>
        </section>
    );
}

export default singUp;