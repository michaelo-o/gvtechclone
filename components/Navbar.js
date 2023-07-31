import styles from './Components.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

    const [togglemenu, settogglemenu] = useState(false)

    const menu = () => {
        settogglemenu(!togglemenu)
    }


    return (
        <>
            <nav className={styles.navbar}>
                <Head>
                    <title>Grandview Technologies</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Image
                    src="/gvtechlogo.png"
                    alt="GvLogo"
                    width={255}
                    height={61}
                />
                <Image onClick={menu}
                    src="/menu.svg"
                    width={30}
                    height={45}
                    alt='menu'
                />
            </nav>
            {togglemenu ? (
                <div className={styles.navmenu}>
                    <Link href="/" className={styles.navlink}><p>Home</p></Link>
                    <Link href="/news" className={styles.navlink}><p>News</p></Link>
                    <Link href="/about" className={styles.navlink}><p>About</p></Link>
                    <Link href="/services" className={styles.navlink}><p>Services</p></Link>
                    <Link href="/contact" className={styles.navlink}><p style={{ "borderBottom": "none" }}>Contact</p></Link>
                    <form action="https://gvtechclone.vercel.app">
                        <input type="text" placeholder='Search...' />
                        <button type="submit"><Image src="/search.svg" width={20} height={45} alt='submit' /></button>
                        <br /> <br />
                    </form>
                </div>
            ) : null}
        </>
    );
}

export default Navbar;