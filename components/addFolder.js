import styles from '../src/app/page.module.css';
import {Component} from 'react';

class addFolder extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.addFolder}>
                <h1> New Folder </h1>
                <p> Please enter a new folder name:</p>
                <input></input>
                <p> To </p>
                <input></input>
                <p> From </p>
                <input></input>
                <div className={styles.right}>
                    <button className={styles.addButton} onClick = {() => this.props.handleAddClose()}> Cancel </button>
                    <button className={styles.addButton} onClick = {() => this.props.handleAddClose()}> Create </button>
                </div>
            </div>
        )
    }
}

export default addFolder;