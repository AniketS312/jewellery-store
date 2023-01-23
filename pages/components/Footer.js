import styles from '../../styles/Footer.module.css'
import {Shipping, Support, GiftCard, Payment, MapPin, Mail} from './FooterIcons'
import Logo from '../../public/logo.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.perks}>
                <SinglePerk 
                image={<Shipping/>}
                imageAlt='Free Shipping on all products'
                title="Free Shipping"
                description="Free Shipping on all products"
                />
                <SinglePerk 
                image={<Support/>}
                imageAlt='Free Shipping on all products'
                title="Free Shipping"
                description="Free Shipping on all products"
                />
                <SinglePerk 
                image={<GiftCard/>}
                imageAlt='Free Shipping on all products'
                title="Free Shipping"
                description="Free Shipping on all products"
                />
                <SinglePerk 
                image={<Payment/>}
                imageAlt='Free Shipping on all products'
                title="Free Shipping"
                description="Free Shipping on all products"
                />
            </div>
            <div className={styles['footer-description']}>
                <div className={styles['footer-description__company']}>
                    <h3>Logo</h3>
                    <span>Contact us today if you have any questions regarding your experince today on the website.</span>
                    <div className={styles['contact-info']}>
                        <MapPin />
                        <p>Edmonton, Alberta, T4R 3R1</p>
                    </div>
                    <div className={styles['contact-info']}>
                        <Mail />
                        <p>jewelryshop@business.com</p>
                    </div>
                </div>
                <div className={styles['footer-description__menu']}>
                    <div className={styles['menu-one']}>
                        <h6>Categories</h6>
                        <ul>
                            <li><a>Earrings</a></li>
                            <li><a>Necklace</a></li>
                            <li><a>Rings</a></li>
                            <li><a>Bracelets</a></li>
                        </ul>
                    </div>
                    <div className={styles['menu-two']}>
                        <h6>Information</h6>
                        <ul>
                            <li><a>About Us</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>Terms of Service</a></li>
                            <li><a>FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles['footer-description__newsletter']}>
                    <h6>Sign Up for our Newsletter</h6>
                    <label>Your email address</label>
                    <input></input>
                </div>
            </div>
        </footer>
    )
}

function SinglePerk(props) {
    return (
        <div className={styles.perk}>
            {props.image}
            <div>
                <h6>{props.title}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

function MenuList(props) {
    return (
        <>
        </>
    )
}