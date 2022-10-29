import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Sidebar.module.css';
import { AccountIcon } from './icons/AccountIcon';
import { CodeIcon } from './icons/CodeIcon';
import { FilesIcon } from './icons/FilesIcon';
import { GithubIcon } from './icons/GithubIcon';
import { MailIcon } from './icons/MailIcon';
import { SettingsIcon } from './icons/SettingsIcon';
interface GetIconInterface {
  Icon: (fill:any) => JSX.Element,
  path: string
}
const sidebarTopItems:GetIconInterface[] = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems:GetIconInterface[] = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

export const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }, index) => (
          <div key={index+path} className={styles.iconContainer}>
            <Link href={path} key={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

