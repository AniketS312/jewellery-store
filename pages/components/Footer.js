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
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
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

                </div>
                <div className={styles['footer-description__newsletter']}>

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