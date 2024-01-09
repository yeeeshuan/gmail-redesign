import styles from '../src/app/page.module.css';
import SetColor from './setColor';
import {Component} from 'react';

class addFolder extends Component{

    constructor(props){
        super(props);

        this.state = {
            colors :["#B6CFF5", "#E8DEF8", "#FFD8E4", "#FFE088", "#CEEF85"],
            show : false,
        }
    }

    handleSetColor = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleInputChange = (e) => {
        console.log("FUCK ME ");
        this.props.handleName(e.target.value);
    };

    render(){
        return(
            <div>
            <div className={styles.addFolder}>
                <h1> New Folder </h1>
                <p>Please enter a new folder name:</p>
                <input onChange={this.handleInputChange} className={styles.setFolder}></input>
                <p>Folder Color</p>
                <button className={styles.setColor} onClick = {() => this.handleSetColor()}></button>
                {(this.state.show) ? (
                    <div> <SetColor handleColor = {this.props.handleColor} colors={this.props.colors} emails = {this.props.emails}/></div>
                ) : (
                    <div />
                )}
                <p>To:</p>
                <input className={styles.setFolder}></input>
                <p>From:</p>
                <input className={styles.setFolder}></input>
                <p>Subject:</p>
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