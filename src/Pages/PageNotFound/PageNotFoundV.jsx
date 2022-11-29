
import styleclass from "../PageNotFound/PageNotFoundV.module.scss"

const PageNotFound = () => {
    return (
        <div className={styleclass["NotFound"]}>
            <h2>Sorry! pagina no encontrada 😥</h2>
        </div>
    );
}

export default PageNotFound;