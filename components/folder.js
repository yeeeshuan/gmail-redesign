import { Component, setState, useState } from 'react';
import styles from '../src/app/page.module.css';
import inbox from '../public/inbox.png';
import SelectColor from './selectColor';
import Image from 'next/image';
import Add from './add';
import threeDots from '../public/Settings.png';

class Folders extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected : 0,
            colorSelected: null,
            emails:[
                {type: "P", name: "Primary"}, 
                {type: "A", name: "Add Email"}
            ],
        }
    }

    handleClick = (idx) =>{
        this.setState({
            selected: idx,
        })
    }

    handleColorClick = (idx) => {
        console.log("HERE");
        this.setState({
            colorSelected: idx,
        })
    }

    handleAddClick = () =>{
        this.props.handleAddActive();
        let store = (this.state.emails);
        store[store.length - 1] =  {type: "P", name: this.props.name, color: "#FFF"};
        store.push({type: "A", name:"Add Email"});
        this.setState({
            emails: this.state.emails,
            addPressed: true
        })
    }

    render(){
        return(
            <div>
            <div className={styles.folders}>
                {this.state.emails.map((email, idx) => {
                    if (idx == this.state.selected){
                        return (
                            <div key = {idx}>
                                <button key={idx} className={styles.firstFolder} onClick={() => this.handleClick(idx)}>
                                    <Image src = {inbox} width = {20} alt = "inbox"/> <p className = {styles.name}> {email.name} </p> 
                                    <div className={styles.add} onClick = {() => this.handleColorClick(idx)}>
                                        <Image src={threeDots} alt="Settings"/>
                                    </div>
                                </button>
                                {(idx == this.state.colorSelected)?(
                                    <SelectColor colors={this.props.colors} index = {idx} emails = {this.state.emails}/>
                                    ) : (
                                        <div/>
                                    )
                                    }
                            </div>
                            
                        )
                    } else if (email.type == "P") {
                        return (
                            <div key={idx}>
                                <button style={{
                                    backgroundColor: email.color,
                                    }}
                                    key={idx} className={styles.folder} onClick={() => this.handleClick(idx)}>
                                    <Image src = {inbox} width = {20} alt = "inbox"/> <p className = {styles.name}> {email.name} </p> 
                                    <div className={styles.add} onClick = {() => this.handleColorClick(idx)}>
                                        <Image src={threeDots} alt="Settings"/>
                                    </div>
                                </button>
                            </div>
                        )
                    } else if (email.type == "A") {
                        return (
                            <button key={idx} className={styles.folder} onClick={() => this.handleAddClick()}>
                                <Add/> <p className = {styles.name}> {email.name} </p>
                            </button>
                        )
                    }
                }               
                )}
          </div>
          </div>
        )
        }
}

export default Folders