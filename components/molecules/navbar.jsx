import React from 'react'
import Container from './container'
import Logo from './logo'
import Anchor from '../atoms/anchor'
const Navbar = () => {
    return (
        <Container className={'navbar'}>
            <Logo src={'/digital-corner.svg'} width={'250px'} height={'45px'} />
            <div className='d-flex justify-content-evenly'>
                <Anchor className={'mx-4 mt-2 mb-1 mr-1'} color={'#546182'}>Hakkımızda</Anchor>
                <Anchor className={'contact-us'} color={'white'}>İletişim</Anchor>
            </div>
        </Container>
    )
}

export default Navbar
