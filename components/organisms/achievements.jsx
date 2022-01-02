import React from 'react'
import Image from 'next/image'
import Container from '../molecules/container'
import Title from '../atoms/title'
import Paragraph from '../atoms/paragraph'
import CountUp from 'react-countup'

const Achievements = () => {
    return (
        <Container width={'100%'}>
            <Container>
                <div data-aos='fade-up' className="row">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <Image
                        src={'/counter-icon-1.png'}
                        width={'75px'}
                        height={'81px'}
                        alt='digital corner agency'
                        />
                        <div className='textBox ml-3'>
                            <Title size={'48px'} color={'white'} weight={'800'}>
                                <span className='counter' >
                                    <CountUp 
                                    end={21}
                                    duration={2}
                                    />
                                </span>+
                            </Title>
                            <Paragraph size={'15px'} color={'white'} weight={'600'}>
                                Mutlu iş ortaklığı
                            </Paragraph>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <Image 
                        src={'/counter-icon-2.png'}
                        width={'92px'}
                        height={'81px'}
                        alt='digital corner agency'
                        />
                        <div className='textBox ml-3'>
                            <Title size={'48px'} color={'white'} weight={'800'}>
                                <span className='counter' >
                                    <CountUp 
                                    end={102}
                                    duration={2}
                                    />    
                                </span>+
                            </Title>
                            <Paragraph size={'15px'} color={'white'} weight={'600'}>
                                Sosyal medya yönetimi
                            </Paragraph>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <Image 
                        src={'/counter-icon-3.png'}
                        width={'75px'}
                        height={'81px'}
                        alt='digital corner agency'
                        />
                        <div className='textBox ml-3'>
                            <Title size={'48px'} color={'white'} weight={'800'}>
                                <span className='counter' >
                                    <CountUp 
                                    end={51}
                                    duration={2}
                                    />    
                                </span>+
                            </Title>
                            <Paragraph size={'15px'} color={'white'} weight={'600'}>
                                SEO Çalışmalarımız
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Achievements
