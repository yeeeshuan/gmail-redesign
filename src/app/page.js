'use client'

import { Component, setState, useState } from 'react';
import Emails from '../../components/email'
import Folders from '../../components/folder'
import styles from './page.module.css'
import AddFolder from '../../components/addFolder'

const colors = ["#B6CFF5", "#E8DEF8", "#FFD8E4", "#FFE088", "#CEEF85"];

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
        emails: [
          {type: "P", name: "Primary"}, 
          {type: "A", name: "Add Folder"}
        ], 

        addPressed: false, 
    }
}

  setPressed = (bool) =>{
    this.setState({
      addPressed: bool
    })
  }


  handleAddClose = () =>{
    this.setPressed(false); 
    console.log(this.state.addPressed);
  }

  onPress = () => {
    this.setPressed(!this.state.addPressed);
  }

  handleAddClick = () =>{
    this.onPress();
    let store = (this.state.emails);
    store[store.length - 1] =  {type: "P", name: "Untitled Folder", color: "#FFF"};
    store.push({type: "A", name:"Add Email"});
    this.setState({
        emails: store,
        addPressed: true
    })
  }

    handleColor = (c) =>
    {
        console.log(c); 
        let temp = (this.state.emails);
        temp[temp.length - 2] =  {type: "P", name: "Untitled Folder", color: c};
        this.setState({
          emails: temp
      })
    }

  render() {
    return (
      <main className={styles.main}>
          <aside className={styles.options}>
          </aside>
          <aside className={styles.console}>
          </aside>
          <section className={styles.emails}>
              <input className={styles.search} type="text" id="fname" name="fname"/>
              <div className={styles.folders}>
                <Folders handleAddActive={this.onPress} handleAddClick={this.handleAddClick} onPress={this.handleAddClose} colors = {colors} emails = {this.state.emails}/>
              </div>
              {this.state.addPressed? <div className = {styles.center}> <AddFolder emails = {this.state.emails} colors = {colors} handleColor={this.handleColor} handleAddClose={this.handleAddClose}/> </div> : <div/>}
                <Emails/>
          </section>
      </main>
    )
  }
}

export default Home;
