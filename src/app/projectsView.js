import styles from './home.module.css'

import { firebaseApp, analytics, storage, ref, getDownloadURL, 
    montserrat, workSans, Image, Link } from './init.js'



function ProjectsView() {



    return (
        <div className={styles.projectsContainer}>
            <div className={styles.roleHeaderContainer}>
                <h2 className={styles.roleHeader}>Projects</h2>
            </div>
        </div>
    );
}

export default ProjectsView;