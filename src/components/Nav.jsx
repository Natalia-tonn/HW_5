import spotifyLogo from "../assets/spotify.svg"
import styles from "../styles/nav.module.css"

function Nav(){
    return(
        <div className={styles.nav_box}>
            <img  src={spotifyLogo} alt="Spotify Logo" />#
            <p className={styles.text_spoti}>Spotify</p>

        </div>
    )
}
export default Nav