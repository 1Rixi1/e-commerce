import {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "@/shared/config";
import styles from './styles.module.scss'

const HomePage = () => {


    const {theme, toggleTheme} = useTheme()


    useEffect(() => {


        document.body.className = `${theme}`

    }, [theme]);

    return (
        <div>
            <Link to='/login'>Login</Link>

            <button className={styles.btn} onClick={toggleTheme}>Toggle Theme</button>

            HomePage
        </div>
    );
};

export default HomePage;