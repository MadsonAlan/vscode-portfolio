import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

export const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Madson Alan - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.windowsButtonMinimize}>
        <Image
            src={`/minimize.png`}
            alt='minimize'
            height={18}
            width={18}
        />
        </span>
        <span>
        <Image
            src={`/maximize.png`}
            alt='maximize'
            height={18}
            width={18}
        />
        </span>
        <span className={styles.windowsButtonClose}>
        <Image
            src={`/close.png`}
            alt='close'
            height={18}
            width={18}
        />
        </span>
        {/* <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span> */}
      </div>
    </section>
  );
};

