import styles from "./Footer.module.css"
import logo from "./../../public/logoDevBlog-H.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Unimar Pós Graduação DevOps</h3>
      <p>Unimar Dev Team &copy; 2024</p>
      <img src={logo} alt="Logo do Developer Mini Blog" />
    </footer>
  );
};

export default Footer;
