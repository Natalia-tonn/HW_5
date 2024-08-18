import styles from "../styles/main.module.css"
import appleLogo from "../assets/apple.svg"
import googleLogo from "../assets/google.svg"
import TwitterLogo from "../assets/Twitter X.svg"



function Main(){
    return(
        <div  className={styles.main_box} >
            <h1 className={styles.text_title} >LIFE IS WASTED ON THE LIVING</h1>
            <p className={styles.text_sign}  >Sign in with</p>
            <div  className={styles.icons_box} >
              <img className={styles.icons_main}  src={appleLogo} alt="Apple Logo" />
              <img className={styles.icons_main} src={googleLogo} alt="Google Logo" />
              <img className={styles.icons_main} src={TwitterLogo} alt="Twitter Logo" />
            </div>
        </div>
    )
}
export default Main