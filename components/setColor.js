import styles from '../src/app/page.module.css';
import { Component } from 'react';

class SetColor extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = {styles.chooseColor}>
                <div className={styles.rowColor}>
                {this.props.colors.map((color, idx) => {
                        return (
                            <button
                                onClick = {() => this.props.handleColor(color)}
                                key = {idx}
                                style={{
                                backgroundColor: color,
                                }} 
                                className={styles.colorButton}
                                >
                                <p className={styles.sampleLetter}>a</p>
                            </button>
                        )
                }               
                )}
                </div>
            </div>
        )
    }
}

export default SetColor;