import Image from "next/image";
import styles from "./page.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>©️2023 All right reserved</div>
      <div className={styles.icon}>
        <Image src="/1.png" alt="facebook" height={15} width={15} />
        <Image src="/2.png" alt="instagram" height={15} width={15} />
        <Image src="/3.png" alt="twiter" height={15} width={15} />
        <Image src="/4.png" alt="yuotube" height={15} width={15} />
      </div>
    </div>
  );
};

export default Footer;
