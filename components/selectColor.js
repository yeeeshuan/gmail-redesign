import styles from '../src/app/page.module.css';
import { Component } from 'react';

class SelectColor extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div onClick = {() => this.props.toggleColorSelect()} className = {styles.chooseColor}>
                <p>Folder Color</p>
                <div className={styles.rowColor}>
                {this.props.colors.map((color, idx) => {
                        return (
                            <button
                                key = {idx}
                                style={{
                                backgroundColor: color,
                                }} 
                                className={styles.colorButton}
                                onClick = {() => this.props.changeColor(this.props.index, idx)}
                                >
                                <p className={styles.sampleLetter}>a</p>
                            </button>
                        )
                }               
                )}
                </div>
                <div className={styles.right}>
                    <button className={styles.cancelButton}> Remove Color</button>
                </div>
            </div>
        )
    }
}

export default SelectColor;