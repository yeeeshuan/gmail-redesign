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
        folders: [
          {type: "P", name: "Primary"}, 
          {type: "A", name: "Add Folder"}
        ], 

        folderEmails: [],

        addPressed: false, 

        selected : 0,

        colorSelected: false,

        emails:[
          {name: "Ethan Huang", description: "Updated Components"}, 
          {name: "Mike Bailey", description: "Web Hosting Plans"}, 
          {name: "Sara Chen", description: "Logo Redesign Design System"}, 
          {name: "Mike Bailey", description: "Sample Menu Page"}, 
          {name: "Sara Chen", description: "Error Page Illustration"}, 
          {name: "Mike Bailey", description: "Project Github Repo"}, 
          {name: "Ethan Huang", description: "Navigation Interactions"}, 
          {name: "Mike Bailey", description: "Development Onboarding Call"}, 
          {name: "Sara Chen", description: "Logo Png Files"}, 
          {name: "Ethan Huang", description: "Menu Cards Prototype"}, 
          {name: "Sara Chen", description: "Homepage Icons Meeting"}, 
          {name: "Claire Avery", description: "Website Redesign Billing"}, 
          {name: "Sara Chen", description: "Brand System PDf"}, 
          {name: "Ethan Huang", description: "First Iteration Wireframe Review"}, 
          {name: "Claire Avery", description: "Creative Brief for Website Redesign"}, 
          {name: "Ethan Huang", description: "Wireframing Meeting Oboarding"}, 
          {name: "Sara Chen", description: "Revised Color Palette"}, 
          {name: "Claire Avery", description: "Onboarding Meeting Invite"}, 
      ],
    }
}

//for sorting emails 
filterName = (name) => {
  let temp = this.state.emails;
  let store = [];
  let ret = this.state.folderEmails; 
  let len = temp.length; 

  for (let i = 0; i<len; i++)
  {
      let e = this.state.emails[i]
      if (e.name.toUpperCase() === name.toUpperCase())
      {
          store.push(e); 
      }
  }

  if (store.length != 0)
  {
    this.setState({
      folderEmails: [...this.state.folderEmails, ...[store]]
    })
  }

  console.log(this.state.folderEmails)
}

//for folder interactions

handleClick = (idx) =>{
  this.setState({
      selected: idx,
  })
}

handleColorClick = (idx) => {
  this.setState({
      colorSelected: idx,
  })
}

toggleColorSelect = () =>{
  this.setState({
      colorSelected: false
  })
}

//for add folder pop-up

  setPressed = (bool) =>{
    this.setState({
      addPressed: bool
    })
  }


  handleAddClose = () =>{
    this.setPressed(false); 
  }

  onPress = () => {
    this.setPressed(!this.state.addPressed);
  }

  handleAddClick = () =>{
    this.onPress();
    let store = (this.state.folders);
    store[store.length - 1] =  {type: "P", name: "Untitled Folder", color: "#FFF"};
    store.push({type: "A", name:"Add Folder"});
    this.setState({
        folders: store,
        addPressed: true
    })
  }

    handleColor = (c) =>
    {
        console.log(c); 
        let temp = (this.state.folders);
        (temp[temp.length - 2]).color = c;
        this.setState({
          folders: temp
      })
    }

    handleName = (n) =>
    {
        console.log(n); 
        let temp = (this.state.folders);
        (temp[temp.length - 2]).name = n; 
        this.setState({
          folders: temp
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
                <Folders handleAddActive={this.onPress} handleAddClick={this.handleAddClick} onPress={this.handleAddClose} colors = {colors} emails = {this.state.folders} selected = {this.state.selected} colorSelected ={this.state.colorSelected} handleClick={this.handleClick} handleColorClick={this.handleColorClick} handleColorSelect={this.handleColorSelect}/>
              </div>
              {this.state.addPressed? 
                <div className = {styles.center}> 
                  <AddFolder emails = {this.state.folders} colors = {colors} handleColor={this.handleColor} handleName={this.handleName} handleAddClose={this.handleAddClose} folderEmails={this.state.folderEmails} filterName = {this.filterName}/> 
                </div> 
                : 
                <div/>}
              {
                (this.state.selected == 0)?
                  <Emails emails = {this.state.emails} />
                :
                  <Emails emails = {(this.state.folderEmails[this.state.selected - 1])}/>
              }
          </section>
      </main>
    )
  }
}

export default Home;
