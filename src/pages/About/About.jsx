import React from "react";
import { motion } from "framer-motion";
import styles from './About.module.css'

const About = () => {
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{type:"spring", stiffness: 120}}
        >
            <h1 className={styles.title}>About us</h1>
                        <img className={styles.img} src="https://img.freepik.com/free-photo/view-3d-car-model_23-2151138973.jpg?t=st=1709916201~exp=1709919801~hmac=adfd7bd64efc3607871849d5d70ece19d9bc99fc75f373d5a96d8e78edbc7957&w=1800" alt="a car" />

            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. <p className={styles.text}>A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio cumque itaque quae blanditiis nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, repellat, laborum totam porro praesentium nulla fugit ducimus exercitationem sit, possimus ab magnam quis optio nostrum!</p>
       <p className={styles.text_last}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi,
eius quasi porro laborum tenetur et, eaque eligendi temporibus atque delectus
numquam quas aperiam quidem nulla deserunt sit praesentium quam neque cumque
sunt? Veritatis, in optio eligendi sint fugiat iusto temporibus nostrum sequi
aut vel itaque voluptatum, iure assumenda mollitia nulla vero dicta non laborum
natus officiis ipsum. Veniam aliquid aliquam ducimus natus impedit, vero sit
esse amet repudiandae laborum quo magni omnis nisi itaque reprehenderit
laudantium quaerat libero eius quia exercitationem debitis maxime modi? Ut
veniam similique incidunt, cumque, id quia debitis temporibus atque qui rem,
sunt dolores quisquam.</p>
        </motion.div>
    )
}

export default About;