import {Titlebar} from '../components/Titlebar';
import {Sidebar} from '../components/Sidebar';
import {Tabsbar} from './Tabsbar';
import styles from '../styles/Layout.module.css';
import { ReactNode } from 'react';
import { Bottombar } from './Bottombar';
import { Explorer } from './Explorer';

interface LayoutProps{
  children: ReactNode
}
export function Layout ({ children }:LayoutProps) {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

