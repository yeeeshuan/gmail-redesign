import { Component } from 'react';
import styles from '../src/app/page.module.css';
import inbox from '../public/inbox.png';
import add from '../public/add.png';
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
        let store = (this.state.emails);
        store[store.length - 1] =  {type: "P", name:"Primary"};
        store.push({type: "A", name:"Add Email"})
        this.setState({
            emails: this.state.emails
        })
    }

    render(){
        return(
            <div className={styles.folders}>
                {this.state.emails.map((email, idx) => {
                    if (idx == this.state.selected){
                        return (
                            <button className={styles.firstFolder} onClick={() => this.handleClick(idx)}>
                                <inbox/><p> {email.name} </p>
                            </button>
                        )
                    } else if (email.type == "P") {
                        return (
                            <button className={styles.folder} onClick={() => this.handleAddClick()}>
                                <Image src = {inbox} width = {20} /> <p className = {styles.name}> {email.name} </p>
                            </button>
                        )
                    } else if (email.type == "A") {
                        return (
                            <button className={styles.folder} onClick={() => this.handleAddClick()}>
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