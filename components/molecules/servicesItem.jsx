import React from 'react'
import Container from './container'
import Title from '../atoms/title'
import Paragraph from '../atoms/paragraph'
import Image from 'next/image'

const ServicesItem = ({className, item}) => {
    return (
        <div data-aos='fade-up' className={ className }>
            <div className="service-item text-center align-items-center m-3 p-4">
                    <div className="image">
                        <img src={`/services/${item.id}.png`} width={'48px'} height={'48px'} alt='digital corner agency' />
                    </div>
                    <Title className={'m-2'} size={'20px'} weight={'bold'}>
                        {item.title}
                    </Title>
                    <Paragraph color={'#546182'} lineHeight={'25px'} size={'15px'} weight={'400'}> 
                        {item.paragraph}
                    </Paragraph>
                </div>
        </div>
    )
}

export default ServicesItem
