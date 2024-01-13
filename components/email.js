import { Component } from 'react'
import styles from '../src/app/page.module.css';
import Select from './select';

function Email(props) {
  return (
   <div className={styles.email}>
       <div className={styles.left}>
            <Select/>
            <p className={styles.name}> {props.name} </p> 
       </div>
       <div className={styles.right}>
            <p className={styles.description}> {props.description} </p>
       </div>
   </div>
  )
}

class Emails extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = {styles.projectRow}>
                {this.props.emails.map((email, idx) => {
                    return <Email
                    key={idx}
                    name = {email.name}
                    description = {email.description}
                    />
                }               
                )}
          </div>
        )
        }
}

export default Emails