import React from 'react';
import {Button} from '../ButtonElements';
import { InfoContainer, TextWrapper, TopLine , Heading, 
InfoWrapper, InfoRow, Column1, Subtitle, BtnWrap, 
ImgWrap, Img, Column2, } from './InfoElements';


const InfoSection = ({lightBg,boderCircle,primary,dark,dark2,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt}) => {
    return (
        <>
            <InfoContainer lightBg = { lightBg } id = { id } >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' primary={ primary ? 1 : 0} smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    dark={ dark ? 1 : 0}
                                    dark2={ dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2 >
                            <ImgWrap>
                                <Img src={img} alt={alt} boderCircle={boderCircle} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
