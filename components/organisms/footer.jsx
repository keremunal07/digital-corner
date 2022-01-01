import React from 'react'
import Container from '../molecules/container'
import Logo from '../molecules/logo'
import Paragraph from '../atoms/paragraph'
import Anchor from '../atoms/anchor'
import Title from '../atoms/title'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <Container width={'100%'} className={'footer-fluid'}>
            <Container className={'pb-5 pt-5'}>
                <div className='d-flex justify-content-between pb-3 pt-3' >
                    <div className='left'>
                        <Logo src={'/digital-corner-white.svg'} width={'240px'} height={'50px'} />
                        <Paragraph className={'mt-4 mb-4'} size={'16px'} color={'#7c7c7c'} weight={400}>
                            Sosyal medya, web tasarım ve diğer medya işlerinizi <br />
                            hızlıca teslim alabileceğiniz dizayn köşesi.
                        </Paragraph>
                        <Anchor
                        color={'#7c7c7c'}
                        >@2022 Digital Corner Agency</Anchor>
                    </div>
                    <div className='right'>
                        <div className='d-flex items'>
                            <ul className='footer-item'>
                                <Title size={'17px'} weight={600} color={'white'}>SERVİSLERİMİZ</Title>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        Sosyal medya yönetimi
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        Web site tasarımı
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        SEO Çalışmaları
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        İçerik yazarlığı
                                    </Anchor>
                                </li>
                            </ul>
                            <ul className='footer-item'>
                                <Title size={'17px'} weight={600} color={'white'}>İLETİŞİM</Title>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        +90 554 229 4567
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        info@digitalcorner.co
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor size={'17px'} color={'#7c7c7c'}>
                                        Antalya/Turkey
                                    </Anchor>
                                </li>
                            </ul>
                            <ul className='footer-item'>
                                <Title size={'17px'} weight={600} color={'white'}>SOSYAL MEDYA</Title>
                                <li className='d-flex align-items-start'>
                                    <div className='footer-icon'>
                                        <FaInstagram size={'17px'} color='white' />
                                    </div>
                                    <Anchor style={{padding:'15px'}} size={'17px'} color={'#7c7c7c'}>
                                        Instagram
                                    </Anchor>
                                </li>
                                <li className='d-flex align-items-start'>
                                    <div className='footer-icon'>
                                        <FaTwitter size={'17px'} color='white' />
                                    </div>
                                    <Anchor style={{padding:'15px'}} size={'17px'} color={'#7c7c7c'}>
                                        Twitter
                                    </Anchor>
                                </li>
                                <li className='d-flex align-items-start'>
                                    <div className='footer-icon'>
                                        <FaFacebook size={'17px'} color='white' />
                                    </div>
                                    <Anchor style={{padding:'15px'}} size={'17px'} color={'#7c7c7c'}>
                                        Facebook
                                    </Anchor>
                                </li>
                                <li className='d-flex align-items-start'>
                                    <div className='footer-icon'>
                                        <FaTelegramPlane size={'17px'} color='white' />
                                    </div>
                                    <Anchor style={{padding:'15px'}} size={'17px'} color={'#7c7c7c'}>
                                        Telegram
                                    </Anchor>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Footer
