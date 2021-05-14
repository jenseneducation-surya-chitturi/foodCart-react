import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import image from '../../assets/image.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Ordering App</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
            </header>
        <div className={classes['main-image']}>
            <img src={image} alt="img"></img>
        </div>
    </Fragment>
    );
};

export default Header;