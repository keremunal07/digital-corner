import React from 'react'
import Container from '../molecules/container'
import Anchor from '../atoms/anchor'
import Title from '../atoms/title'
import Paragraph from '../atoms/paragraph'
import Image from 'next/image'
const WhyChooseUs = () => {
    return (
        <Container>
            <div className="about-text row align-items-center justify-content-between">
                <div data-aos='fade-right' className="col-lg-5 align-center text-left">
                    <Title className={'mb-3'} size={'30px'} lineHeight={'25px'} weight={'bold'} >
                        Neden Bizi Seçmelisiniz?
                    </Title>
                    <Paragraph color={'#546182'} size={'18px'} lineHeight={'32px'} >
                        Nunc eu augue at nunc consectetur venenatis sit amet sodales metus. 
                        Sed at gravida nisi, mattis lacinia ipsum. Pellentesque suscipit odio
                        quis ligula maximus aliquet. Integer cursus ipsum et posuere ornare.
                    </Paragraph>
                </div>
                <div data-aos='fade-left' className="col-lg-6 right">
                    <Image width={'585px'} height={'388px'} src={'/web-designer.png'} layout='fixed' alt='digital corner agency' />
                </div>
            </div>
            <div data-aos='fade-right' className="about-text row align-items-center justify-content-between">
                <div className="col-lg-6 align-center text-left">
                    <Image width={'600px'} height={'400px'} src={'/social-media.png'} layout='fixed' alt='digital corner agency' />
                </div>
                <div data-aos='fade-left' className="col-lg-5 right">
                    <Title className={'mb-3'} size={'30px'} lineHeight={'25px'} weight={'bold'} >
                        Size Garanti Ediyoruz!
                    </Title>
                    <Paragraph color={'#546182'} size={'18px'} lineHeight={'32px'} >
                        Nunc eu augue at nunc consectetur venenatis sit amet sodales metus. 
                        Sed at gravida nisi, mattis lacinia ipsum. Pellentesque suscipit odio
                        quis ligula maximus aliquet. Integer cursus ipsum et posuere ornare.
                    </Paragraph>
                </div>
            </div>
        </Container>
    )
}

export default WhyChooseUs
