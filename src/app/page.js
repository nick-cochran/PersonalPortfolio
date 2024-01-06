import { firebaseApp, analytics, storage, ref, getDownloadURL, 
    montserrat, workSans, inter, Image, Link } from './init.js';

import styles from './home.module.css';



export default function Page() {
  return (
    <main className={montserrat.className}>
        <div className={styles.homeContainer}>
            <div className={styles.picContainer}>
                <Image className={styles.homeImage} src='/images/NickProfilePic.jpg' 
                    alt="Nick Cochran" width={500} height={500}/>
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.nameTitle + ' ' + montserrat.className}>
                            Nick Cochran
                        </h1>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.description}>
                            {"Hey! I am a Senior at WashU pursuing a Bachelor of Science in Computer Science. You'll often find me with a camera in hand, in a theater, or programming on my computer. Or better yet, all of the above!"}
                        </p>
                        <Link className={styles.aboutLink} href='/about'>More About Me...</Link>
                    </div>

                    <div className={styles.btnsContainer}>
                        <div className={styles.seeWorkContainer}>
                            <Link href='/about'>
                                <button className={styles.seeWorkBtn}>See My Work</button>
                            </Link>
                        </div>

                        <div className={styles.resumesContainer}>
                            <a className={styles.resumeCont} href='/NickCochranResume.pdf' download>
                                <button className={styles.resumeBtn} id={styles.engResumeBtn}>Resume</button>
                            </a>
                            <a className={styles.resumeCont} href='/NickCochranTheatreResume.pdf' download>
                                <button className={styles.resumeBtn} id={styles.theatreResumeBtn}>Theatre Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className={styles.linksContainer}>
                <Link className={styles.linkBubble} id='emailBub' href='mailto:nickcochran02@gmail.com'>
                    <div className={styles.linkIcon}>
                        <Image className={styles.linkImage} src='/images/email.png'
                         alt="Email" width={75} height={75}/>
                    </div>
                    <div className={styles.linkText}>
                        nickcochran02@gmail.com
                    </div>
                </Link>
                <Link className={styles.linkBubble} id='githubBub' href='https://www.github.com/nick-cochran'>
                    <div className={styles.linkIcon}>
                        <Image className={styles.linkImage} src='/images/github.png'
                         alt="GitHub" width={75} height={75}/>
                    </div>
                    <div className={styles.linkText}>
                        www.github.com/nick-cochran
                    </div>
                </Link>
                <Link className={styles.linkBubble} id='linkedinBub' href='https://www.linkedin.com/in/nick-cochran'>
                    <div className={styles.linkIcon}>
                        <Image className={styles.linkImage} src='/images/linkedin.png'
                         alt="LinkedIn" width={75} height={75}/>
                    </div>
                    <div className={styles.linkText}>
                        www.linkedin.com/in/nick-cochran
                    </div>
                </Link>
            </div>

        {/* <br className={styles.break}></br>
        <div className={styles.skillsContainer}>

        </div> */}
        
        <div className={styles.break}></div>

        <div className={styles.rolesContainer}>

        </div>

        {/* <ProjectsView /> */}

    </main>
  )
}
