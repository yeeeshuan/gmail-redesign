import { Component, setState, useState } from 'react';
import styles from '../src/app/page.module.css';
import inbox from '../public/inbox.png';
import SelectColor from './selectColor';
import Image from 'next/image';
import Add from './add';
import threeDots from '../public/Settings.png';
import Fold from '../public/Folder.png';

class Folders extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected : 0,
            colorSelected: false,
        }
    }

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

    render(){
        return(
            <div>
            <div className={styles.folders}>
                {this.props.emails.map((email, idx) => {
                if (email.type == "P") {
                        return (
                            <div key={idx}>
                                <button style={{
                                    backgroundColor: email.color,
                                    }}
                                    key={idx} className={styles.folder} onClick={() => this.handleClick(idx)}>
                                    <Image src = {Fold} width = {20} alt = "inbox"/> <p className = {styles.name}> {email.name} </p> 
                                    <div className={styles.change} onClick = {() => this.handleColorClick(idx)}>
                                        <Image src={threeDots} alt="Settings"/>
                                    </div>
                                </button>
                                {(idx === this.state.colorSelected) ? (
                                        <div> <SelectColor selectClick={this.toggleColorSelect} colors={this.props.colors} index={idx} emails={this.props.emails}/></div>
                                    ) : (
                                        <div />
                                    )}
                            </div>
                        )
                    } else if (email.type == "A") {
                        return (
                            <div key={idx}>
                                <button key={idx} className={styles.add} onClick={() => this.props.handleAddClick()}>
                                    <Add/> <p className = {styles.name}> {email.name}</p>
                                </button>   
                            </div>
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