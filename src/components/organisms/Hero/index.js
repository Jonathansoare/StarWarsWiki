import React from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton,PlayButton } from '~/components/molecules'

export const Hero = ({item,withoutLogo,onDetail}) => {
  const {image_url, title,subtitle,type} = item;
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri:image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
         {!withoutLogo && <Logo size="small"/>}
          <Tag mt={withoutLogo ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>

          <ButtonsView>
            <IconButton iconName="add-circle-outline" label="Favoritos" />
            <PlayButton />

            {
              !onDetail && (
                <IconButton iconName="information-circle-outline" label="Saiba mais"/>
              )
            }
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
