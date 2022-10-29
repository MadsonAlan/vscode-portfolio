
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Tab.module.css';

interface TabProps{
  icon: string,
  filename: string,
  path: string
}
export const Tab = ({ icon, filename, path }:TabProps) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

