import React from 'react'
import { ButtonContainer } from './styles'
import { Text } from '~/components/atoms'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles/theme'

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        px
        color={theme.colors.white}
      />
      <Text fontFamily="semiBold" size={10} mt={6}>
        {label}
      </Text>
    </ButtonContainer>
  )
}
