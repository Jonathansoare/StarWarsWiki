import React from "react";
import {PlayButtonContainer} from "./styles"
import { Text } from '~/components/atoms'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles/theme'

export const PlayButton = ({ onPress }) => {
    return(
        <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14} mt={6} color="black">Play</Text>
    </PlayButtonContainer>
    )
}