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
    }

    render(){
        return(
            <div>
            <div className={styles.folders}>
                {this.props.folders.map((folder, idx) => {
                if (folder.type == "P") {
                        return (
                            <div key={idx}>
                                <button style={{
                                    backgroundColor: folder.color,
                                    }}
                                    key={idx} className={styles.folder} onClick={() => this.props.handleFolderClick(idx)}>
                                    <Image src = {Fold} width = {20} alt = "inbox"/> <p className = {styles.name}> {folder.name} </p> 
                                    <div className={styles.change} onClick = {() => this.props.toggleColorSelect()}>
                                        <Image src={threeDots} alt="Settings"/>
                                    </div>
                                </button>
                                {(this.props.colorChange && idx === this.props.folderSelected) ? (
                                        <div> <SelectColor deleteFolder={this.props.deleteFolder} toggleColorSelect={this.props.toggleColorSelect} changeColor={this.props.changeColor} colors={this.props.colors} index={idx} folders={this.props.folders}/></div>
                                    ) : (
                                        <div />
                                    )}
                            </div>
                        )
                    } else if (folder.type == "A") {
                        return (
                            <div key={idx}>
                                <button key={idx} className={styles.add} onClick={() => this.props.handleAddClick()}>
                                    <Add/> <p className = {styles.name}> {folder.name}</p>
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