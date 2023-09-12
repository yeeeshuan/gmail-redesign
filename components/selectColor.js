import styles from '../src/app/page.module.css';
import { Component } from 'react';

class SelectColor extends Component{

    constructor(props){
        super(props);
    }

    handleColor = (j,i, emails) => {
        let temp = emails;
        temp[j] = {type: temp[j].type, name: temp[j].name, color: this.props.colors[i]}
        this.setState = {
            emails: temp,
        }

    }
    render(){
        return (
            <div className = {styles.chooseColor}>
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
                                onClick = {() => this.handleColor(this.props.index, idx, this.props.emails)}
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