import styles from './Components.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footgrid}>
                    <div className={styles.footbox1}>
                        <h4>Grandview Technologies</h4>
                        <br />
                        <br />
                        <p>Solutions today for Tomorrow's future    </p>
                        <br />
                        <br />
                        <form action="https://gvtechclone.vercel.app">
                            <input type="text" placeholder='Search...' />
                            <button type="submit"><Image src="/arrow-right.svg" width={20} height={33} alt='submit' /></button>
                            <br /> <br />
                        </form>
                    </div>
                    <div className={styles.footbox2}>
                        <h4>Contact us</h4>
                        <p>No 10 Gimbiya Street</p>
                        <p>area 11, Garki Abuja</p>
                        <p>Phone: +234 (09)291 0460</p>
                        <p>E-Mail: info@gvtechng.com</p>
                        <p>Web Site: www.gvtechng.com</p>
                    </div>
                    <div className={styles.footbox3}>
                        <h4>Recent Posts</h4>
                        <Link href="#" className={styles.recentslinks}><p>&#62;&#32;Grandview Technologies is Exci...</p></Link>
                        <Link href="#" className={styles.recentslinks}><p>&#62;&#32;Africa Tech Summit – London</p></Link>
                        <Link href="#" className={styles.recentslinks}><p>&#62;&#32;Africa Tech Summit – Kigali</p></Link>
                        <Link href="#" className={styles.recentslinks}><p>&#62;&#32;CEO Interview – CNBC</p></Link>
                        <Link href="#" className={styles.recentslinks}><p>&#62;&#32;GuardWatch Launch</p></Link>
                    </div>
                    {/* <div className={styles.footbox3}>
                    <h4>Recent Posts</h4>
                    <ul>
                        <li>&#32;Grandview Technologies is Exci...</li>
                        <li>&#32;Africa Tech Summit – London</li>
                        <li>&#32;Africa Tech Summit – Kigali</li>
                        <li>&#32;CEO Interview – CNBC</li>
                        <li>&#32;GuardWatch Launch</li>
                    </ul>
                        </div> */}
                    <div className={styles.footbox4}>
                        <h4>Our Skills</h4>
                        <div className={styles.progressbar}></div>
                        <div>
                            <span className={styles.progvalue}>60%</span> <progress className={styles.progressbar} value="60" max="100"> 60% </progress>
                            <h4 className={styles.progresstitle}>Developing</h4>
                        </div>
                        <div>
                            <span className={styles.progvalue}>80%</span> <progress className={styles.progressbar} value="80" max="100"> 80% </progress>
                            <h4 className={styles.progresstitle}>Designing</h4>
                        </div>
                        <div>
                            <span className={styles.progvalue}>90%</span> <progress className={styles.progressbar} value="90" max="100"> 90% </progress>
                            <h4 className={styles.progresstitle}>Supporting</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.footbox5}>
                    <Image src="/gvtechlogo.png" alt='gvtechlogo' width={225} height={55} />
                    <br />
                    <div className={styles.socialLinks}>
                        <Link href="https://www.facebook.com/gvtechng" className={styles.footlink} target='_blank'><FaFacebookF /> </Link>
                        <Link href="https://twitter.com/gvtechng" className={styles.footlink} target='_blank'><FaTwitter /> </Link>
                        <Link href="https://www.linkedin.com/company/11187084" className={styles.footlink} target='_blank'><FaLinkedinIn /></Link>
                    </div>
                    <p>© Grandview Technologies. All Rights Reserved.</p>
                    {/* <Image src="/gvtechlogo.png" alt='fbicon' width={225} height={55} />
                    <Image src="/gvtechlogo.png" alt='twittericon' width={225} height={55} />
                    <Image src="/gvtechlogo.png" alt='linkedinicon' width={225} height={55} /> */}
                </div>
            </footer>

        </>
    );
}

export default Footer;