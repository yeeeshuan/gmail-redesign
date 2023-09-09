import { Component } from 'react';
import styles from '../src/app/page.module.css';
import inbox from '../public/inbox.png';
import Image from 'next/image';
import Add from './add';

class Folders extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected : 0,
            emails:[
                {type: "P", name: "Primary"}, 
                {type: "A", name: "Add Email"}, 
            ]
        }
    }

    handleClick = (idx) =>{
        this.setState({
            selected: idx,
        })
    }

    handleAddClick = () =>{
        this.props.handleAddActive();
        let store = (this.state.emails);
        store[store.length - 1] =  {type: "P", name:"Primary"};
        store.push({type: "A", name:"Add Email"})
        this.state.addPressed = true
        this.setState({
            emails: this.state.emails,
            addPressed: this.state.addPressed
        })
    }

    render(){
        return(
            <div className={styles.folders}>
                {this.state.emails.map((email, idx) => {
                    if (idx == this.state.selected){
                        return (
                            <button key={idx} className={styles.firstFolder} onClick={() => this.handleClick(idx)}>
                                 <Image src = {inbox} width = {20} alt = "inbox"/> <p className = {styles.name}> {email.name} </p>
                            </button>
                        )
                    } else if (email.type == "P") {
                        return (
                            <button key={idx} className={styles.folder} onClick={() => this.handleClick(idx)}>
                                <Image src = {inbox} width = {20} alt = "inbox"/> <p className = {styles.name}> {email.name} </p>
                            </button>
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
        )
        }
}

export default Folders