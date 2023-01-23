import styles from '../../styles/Header.module.css'



export default function Header() {
    return(
        <header className={styles.header}>
            <Headline />
            <HeadMain />
            <HeadMenu />
        </header>
    )
}
function Headline() {
    return (
        <div className={styles.headline}>
            <span className={styles.announcement}><span className={styles.bolded}>Free shipping</span> on orders over <span className={styles.bolded}>$100.</span> Need Help? <span className={styles.bolded}>1-800-525-6252</span></span>
        </div>
    )
}

function HeadMain() {
    return (
        <div className={styles.headmain}>
            <h2>Logo here</h2>
            <div>
                <form>
                    <label>Search</label>
                    <input type='text' placeholder='Search'></input>
                </form>
            </div>
        </div>
    )
}

function HeadMenu() {
    return (
        <div className={styles.headmenu}>
            <div className={styles['headmenu-menu']}>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>

                </ul>
            </div>
            <div className={styles['headmenu-cart']}>
                Cart here
            </div>
            <div className={styles['headmenu-cart']}></div>
        </div>
    )
}