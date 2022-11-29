

import { useState } from "react"
import styleclass from "../Feed/Feed.module.scss"

import Home from "../../Components/Home/Home"

const Feed = () => {

    const [posts, setPost] = useState([]);

/*     const savePostService = async (category, name_service, address, img_url) =>{
        try {
            const response = await fetch ("http://localhost:3000/api/post",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({category, name_service, address, img_url})
            });

            if(response.ok){
                toast.success("Servicio creado correctamente")
            }else{
                const code = response.status.toString();
                const msg = {"400": "Wrong field or Imcomplete item", "404": "Not found"}
                toast.warning(msg[code]);
            }
        } catch (error) {
            toast.error("Unexpected Error!")
        }
    }

    const onAddPostHandler = async (category, name_service, address, img_url) => {
       await savePostService(category, name_service, address, img_url);
    }; */

    return (
        <div className={styleclass["feed-container"]}>
            <Home />
        </div>
    );
}




export default Feed;