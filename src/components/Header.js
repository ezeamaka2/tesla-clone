import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCar } from '../features/car/CarSlice';
import { useSelector } from 'react-redux';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const cars = useSelector(selectCar);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <Container>
        <a href='#'>
            <img src="/images/logo.svg" alt='logo'/>
        </a>

        <Menu>
            {cars && cars.map((car, index) => (
                <a key={index} href='#'>{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
            <CustomMenu onClick={toggleMenu} />
        </RightMenu>
        <BurgerMenu show={openMenu}>
            <ListItems>
                <CustomClose onClick={toggleMenu}>
                    <CloseBtn />
                </CustomClose>
                <Lists>
                    {cars && cars.map(car => (
                        <li><a href='#'>{car}</a></li>
                    ))}
                    <li><a href='#'>Existing Inventory</a></li>
                    <li><a href='#'>Used Inventory</a></li>
                    <li><a href='#'>Cybertruck</a></li>
                    <li><a href='#'>Utilies</a></li>
                    <li><a href='#'>Find us</a></li>
                </Lists>
            </ListItems>
        </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        text-decoration: none;
        font-weight: 400;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    a:hover{
        text-decoration:underline;
    }

    @media (max-width: 900px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    a {
        text-decoration: none;
        font-weight: 400;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    a:hover {
        text-decoration: underline;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    transform: ${props => props.show ? 'translateX(0)' :'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
`
const ListItems = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: white;
    color: #000;
`   

const Lists = styled.div`
    list-style: none;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: start; 


    li {
        padding: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        width: 300px;
        text-align: left;
        flex: 1;

        a{
            text-decoration: none;
            font-weight: 400;
        }
    }
`

const CloseBtn = styled(CloseIcon)`
    cursor: pointer;
`

const CustomClose = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 20px;
`