'use client'

import {useState} from 'react'
import Emails from '../../components/email'
import Folders from '../../components/folder'
import styles from './page.module.css'
import AddFolder from '../../components/addFolder'


function Home() {
  const [addPressed, setPressed] = useState(false);
  const colors = ["#B6CFF5", "#E8DEF8", "#FFD8E4", "#FFE088", "#CEEF85"];

  const handleName = () =>{
    return "Car Redesign"; 
  }

  const onPress = () => {
    setPressed(true);
    console.log(addPressed);
  }

  const onClose = () => {
    setPressed(false);
  }

    return (
      <main className={styles.main}>
          <aside className={styles.options}>
          </aside>
          <aside className={styles.console}>
          </aside>
          <section className={styles.emails}>
              <input className={styles.search} type="text" id="fname" name="fname"/>
              <div className={styles.folders}>
                <Folders handleAddActive={onPress} name = {handleName()} colors = {colors}/>
              </div>
              {addPressed? <div className = {styles.center}> <AddFolder colors = {colors} handleAddClose={onClose}/> </div> : <div/>}
                <Emails/>
          </section>
      </main>
    )
  }

export default Home;
