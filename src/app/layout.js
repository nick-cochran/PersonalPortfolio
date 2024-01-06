import { firebaseApp, analytics, storage, ref, getDownloadURL, 
    montserrat, workSans, Image, Link } from './init.js';

import styles from './globals.css'

export const metadata = {
  title: 'Nick Cochran Portfolio',
  description: 'This is a portfolio site for Nick Cochran.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={'header' + " " + workSans.className}>
            <nav>
                <div className='navItem' id='NCLogo'>
                    <Link href='/'>
                        <h1>NC</h1>
                        <Image className={styles.homeImage} src={'/images/NCPic.png'} alt="NC logo" width={50} height={50}/>
                    </Link>
                </div>
                <ul className='navLinks'>
                    <li className='navItem'><Link href="/about">About</Link></li>
                    <li className='navItem'><Link href="/software-development">Software</Link></li>
                    <li className='navItem'><Link href="/theatre">Theatre</Link></li>
                    <li className='navItem'><Link href="/photography">Photography</Link></li>
                    <li className='navItem'><Link href="/film">Film</Link></li>
                </ul>
            </nav>
            <div className='navItem contact'>
                <Link href='/contact'>
                    <button className='contactBtn'>Contact</button>
                </Link>
            </div>
        </header>
        <header className='header headerBlock'></header>

        {children}


        <footer className='footer'>

        </footer>

      </body>
    </html>
  )
}
