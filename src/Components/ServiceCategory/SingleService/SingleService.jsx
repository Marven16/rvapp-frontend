

const SingleService = ({ name_service = "", address = "", img_url = "" }) =>{
    return(
        <article className={classes["post"]} >
      <h4> {name_service} </h4>
      <h5>{address}</h5>
      <figure>
        <img src={img_url} alt="Post  Image" />
      </figure>

    </article>
    );
}

export default SingleService;