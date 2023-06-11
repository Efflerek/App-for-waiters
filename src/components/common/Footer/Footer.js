import styles from './Footer.module.scss';
import { Container } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          Copyright © Kodilla 2023
      </Container>
    </footer>
  );
};

  export default Footer;