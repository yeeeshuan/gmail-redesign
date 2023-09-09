import styles from '../src/app/page.module.css';
import add from '../public/add.png';
import Image from 'next/image';

function Add(){
    return (
        <div className={styles.add}>
            <Image src={add} alt="add" width={10}/>
        </div>
    )
}

export default Add;