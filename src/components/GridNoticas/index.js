import React from 'react';
import { 
    Columns, Column, Card, CardImage, Image, 
    CardContent, Media, MediaLeft, MediaContent,
    Title, Subtitle, Content 
    } from 'bloomer';

const GridNoticias = (props) =>{
    const { noticias } = props
    const cards = noticias.map(card =>{
        return(
            <Column isSize='1/4'>
                <Card>
                    <CardImage>
                        <Image isRatio='4:3' src={card.image} alt={card.post_title} />
                    </CardImage>
                    <CardContent>
                        <Media>
                            <MediaLeft>
                                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
                            </MediaLeft>
                            <MediaContent>
                                <Title isSize={4}>{card.post_title}</Title>
                                <Subtitle isSize={6}>@John Wick</Subtitle>
                            </MediaContent>
                        </Media>
                        <Content>
                            {card.acf.bajada}
                            <br/>
                            <small>11:09 PM - 30 October 2014</small>
                        </Content>
                    </CardContent>
                </Card>
            </Column>
        )
    })
    return(
        <div>
            <Columns isCentered>
                {cards}
            </Columns> 
        </div>
    )
}

export default GridNoticias