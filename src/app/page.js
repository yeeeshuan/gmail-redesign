'use client'

import Image from 'next/image'
import Emails from '../../components/email'
import Folders from '../../components/folder'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <aside className={styles.options}>

        </aside>
        <aside className={styles.console}>
        </aside>
        <section className={styles.emails}>
            <input className={styles.search} type="text" id="fname" name="fname"/>
            <div className={styles.folders}>
              <Folders/>
            </div>
            <Emails/>
        </section>
    </main>
  )
}
