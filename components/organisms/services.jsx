import React from 'react'
import Container from '../molecules/container'
import Anchor from '../atoms/anchor'
import Paragraph from '../atoms/paragraph'
import Title from '../atoms/title'
import Image from 'next/image'
import ServicesItem from '../molecules/servicesItem'

const Services = () => {
    
    const servicesItem = [
        {
            id:1,
            title:'Sosyal Medya Yönetimi',
            paragraph:'Güncel teknolojilerle eşsiz tasarımlarımızı size sunuyoruz.'
        },
        {
            id:2,
            title:'Website Geliştirme',
            paragraph:'Güncel teknolojilerle eşsiz tasarımlarımızı size sunuyoruz.'
        },
        {
            id:3,
            title:'İçerik Yazarlığı',
            paragraph:'Güncel teknolojilerle eşsiz tasarımlarımızı size sunuyoruz.'
        },
        {
            id:4,
            title:'SEO Optimizasyonu',
            paragraph:'Güncel teknolojilerle eşsiz tasarımlarımızı size sunuyoruz.'
        },
        {
            id:5,
            title:'Logo & Marka Tasarımı',
            paragraph:'Güncel teknolojilerle eşsiz tasarımlarımızı size sunuyoruz.'
        },
        {
            id:6,
            title:'Grafik Tasarım',
            paragraph:'Güncel teknolojilerle eşsiz tasarımlarımızı size sunuyoruz.'
        }
    ]
    return (
        <Container className={'text-center pt-5 pb-2 services-wrapper'}>
            <Title className={'m-4'} size={'36px'} weight={'bold'}>Hizmetlerimiz</Title>
            <Paragraph className={'pb-4'} size={'18px'} lineHeight={'24px'}> 
                Size sunduğumuz hizmetler size sunduğumuz hizmetler  <br /> size sunduğumuz hizmetler Size sunduğumuz hizmetler  sunduğumuz hizmetler
            </Paragraph>
            <div className='row'>
                {
                    servicesItem.map((item) => {
                        return (
                            <ServicesItem
                            key={item.id}
                            className={'col-4'}
                            item={item}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Services
