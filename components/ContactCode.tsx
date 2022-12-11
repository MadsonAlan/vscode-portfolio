import styles from '../styles/ContactCode.module.css';

interface contactItems{
  social: string,
  link: string,
  href: string,
}
const contactItems:contactItems[] = [
  {
    social: 'email',
    link: 'contato.madsonalan@gmail.com',
    href: 'mailto:contato.madsonalan@gmail.com',
  },
  {
    social: 'github',
    link: 'MadsonAlan',
    href: 'https://github.com/madsonAlan',
  },
  {
    social: 'linkedin',
    link: 'Madson Alan',
    href: 'https://www.linkedin.com/in/madson-alan-vitorino-sousa-550040158/',
  },
  {
    social: 'instagram',
    link: 'madson.alan',
    href: 'https://www.instagram.com/madson.alan',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noreferrer noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noreferrer noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
