import styles from '../src/app/page.module.css';
import add from '../public/add.png';
import Image from 'next/image';

function Add(){
    return (
        <button className={styles.add}>
            <Image src={add} width={10}/>
        </button>
    )
}

export default Add;