import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';

const ListConteiner = styled.ul`
    ${tw`
        flex
        list-none
    `}
`;

const NavIteam = styled.li<{menu?:any}>`
    ${tw`
        text-xs
        md:text-base
        text-black
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
    ${({menu})=> menu && css`
        ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `}
    `}
`

export function NavItems(){
    
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    if(isMobile){
        return(
        <Menu right styles={menuStyles}>
            <ListConteiner>
                <NavIteam menu >
                    <a href="#">Home</a>
                </NavIteam>
                <NavIteam menu >
                    <a href="#">Cars</a>
                </NavIteam>
                <NavIteam menu >
                    <a href="#">Service</a>
                </NavIteam>
                <NavIteam menu >
                    <a href="#">Contacts</a>
                </NavIteam>
            </ListConteiner>
        </Menu>
        )
    }

    return (
        <ListConteiner>
            <NavIteam>
                <a href="#">Home</a>
            </NavIteam>
            <NavIteam>
                <a href="#">Cars</a>
            </NavIteam>
            <NavIteam>
                <a href="#">Service</a>
            </NavIteam>
            <NavIteam>
                <a href="#">Contacts</a>
            </NavIteam>
        </ListConteiner>
    )
}