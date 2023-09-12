import styles from '../src/app/page.module.css';
import {Component} from 'react';

class addFolder extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <div className={styles.addFolder}>
                <h1> New Folder </h1>
                <p> Please enter a new folder name:</p>
                <input className={styles.setFolder}></input>
                <p> To </p>
                <input className={styles.setFolder}></input>
                <p> From </p>
                <input className={styles.setFolder}></input>
                <div className={styles.right}>
                    <button className={styles.cancelButton} onClick = {() => this.props.handleAddClose()}> Cancel </button>
                    <button className={styles.createButton} onClick = {() => this.props.handleAddClose()}> Create </button>
                </div>
            </div>
            </div>
        )
    }
}

export default addFolder;