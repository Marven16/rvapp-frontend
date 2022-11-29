import styleclass from "../Home/Home.module.scss";

import { useNavigate } from 'react-router-dom'


import images01 from '../../assets/images/hotel.jpg'
import ServiceCategory from "../ServiceCategory/ServiceCategory";

const Home = () => {
    const navigate = useNavigate();
    /*  const [posts, setPosts] = useState([]); */

    return (
        <main >
           
            <section className={styleclass["categoty-section"]}>
                <h2>CATEGORIAS</h2>
                <div className={styleclass["categoty-container"]} >
                    <div className={styleclass["card-categoty"]} onClick={() => navigate("/service_category")}>
                        <div>
                            <h3>Educacion</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Hoteles</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Restaurantes</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Instituciones de gobierno</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Telefonia</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div >
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Servicios de transporte</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Centros comerciales</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                    <div className={styleclass["card-categoty"]}>
                        <div>
                            <h3>Centros comerciales</h3>
                        </div>
                        <figure>
                            <img src={images01} alt="" />
                        </figure>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;