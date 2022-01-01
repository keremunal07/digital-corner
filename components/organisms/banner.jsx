import React from 'react'
import Container from '../molecules/container'
import Title from '../atoms/title'
import Paragraph from '../atoms/paragraph'
import BannerItem from './banner/bannerItem'
import Button from '../atoms/button'
import { Navigation, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import "swiper/css/effect-fade"
import 'swiper/css/navigation'
import 'swiper/css/autoplay'



const Banner = () => {
    const settings_swiper = {
        observeParents: true, 
        observer: true,
        autoplay:{
              delay: 2500,
              disableOnInteraction: false
            },
        effect:'fade',
  
        fadeEffect:{
           crossFade: true
           },
                
        navigation:false,
    }
    return (
            <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            {...settings_swiper}
            className='mySwiper' >
                    <SwiperSlide>
                        <Container>
                            <BannerItem src={'/web-designer.png'}>
                                <Title color={'#32325c'} size={'3.5rem'} weight={600} letterSpacing={'-,03rem'} >
                                    Bırakın sitenizi biz tasarlayalım.
                                </Title>
                                <Paragraph className={'mb-5 mt-4'} size={'1.30rem'} weight={400} lineHeight={'30px'} >
                                    Siz hayal edin biz size en kısa sürede o siteyi ulaştıralım.
                                </Paragraph>
                                <Button 
                                className={'btn-middle'}
                                color={'white'} 
                                size={'20px'}>
                                    Bize Ulaşın!
                                </Button>
                            </BannerItem>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container>
                            <BannerItem src={'/social-media.png'}>
                                    <Title color={'#32325c'} size={'3.5rem'} weight={600}>
                                        Sosyal medyanızı bize emanet edin!
                                    </Title>
                                    <Paragraph className={'mb-5 mt-4'} size={'1.30rem'} weight={400} lineHeight={'30px'} >
                                        Ona gözümüz gibi bakacağımızdan emin olabilirsiniz:)
                                    </Paragraph>
                                    <Button className={'btn-middle'} color={'white'} size={'20px'}>
                                        Bize Ulaşın!
                                    </Button>
                                </BannerItem>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container>
                        <BannerItem src={'/seo.png'}>
                                <Title color={'#32325c'} size={'3.5rem'} weight={600}>
                                    Bizimle aramalarda en üste çıkın.
                                </Title>
                                <Paragraph className={'mb-5 mt-4'} size={'1.30rem'} weight={400} lineHeight={'30px'} >
                                    Siz isteyin biz size istediğiniz içerik yazısını yaratalım. Hemen bizimle iletşime geçin.
                                </Paragraph>
                                <Button className={'btn-middle'} color={'white'} size={'20px'}>
                                    Bize Ulaşın!
                                </Button>
                            </BannerItem>
                        </Container>
                    </SwiperSlide>
                </Swiper>
    )
}

export default Banner
