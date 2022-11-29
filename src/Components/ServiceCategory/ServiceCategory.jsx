
import styleclass from '../ServiceCategory/ServiceCategory.module.scss'
import SingleService from './SingleService/SingleService';

const ServiceCategory = () => {

   /*  const mappedPosts = posts.map(post => {
        return (
            <SingleService
                key={post._id}
                name_service={post.name_service}
                address={post.address}
                image={post.img_url}
            />
        );
    }) */


    return (
        <section className={styleclass["ServiceCategory"]}>
            <h3>Revisa las nuevas reseñas antes de aventurarte</h3>
            {/* <div className={classes["posts"]}>
                {mappedPosts}
            </div> */}
        </section>
    );
}

export default ServiceCategory;