import React from "react";
import { HomeList,Hero,SCreenScrollConatiner,GoBack,Text } from "~/components";
import { useDataStore } from "~/services/stores";


export const Detail = () => {
    const {selectData} = useDataStore()
    return(
        <SCreenScrollConatiner aling="flex-start" just="flex-start">
            <Hero item={selectData} withoutLogo={true} onDetail/>
            <Text ml={24} fontFamily="black" size={18}>Descrição</Text>
            <Text ml={24} mr={24} size={14} mt={12} mb={10} lh={20}>Quando a maquiavélica Federação Comercial planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn e seu aprendiz Obi-Wan Kenobi embarcam em uma aventura para tentar salvar o planeta. Viajam com eles a jovem Rainha Amidala, que é visada pela Federação pois querem forçá-la a assinar um tratado político. Eles têm de viajar para os distantes planetas Tatooine e Coruscant em uma desesperada tentativa de salvar o mundo de Darth Sidious, o demoníaco líder da Federação que sempre surge em imagens tridimensionais (a ameaça fantasma). Durante a viagem, Qui-Gon Jinn conhece um garoto de nove anos que deseja treiná-lo para ser tornar um Jedi, pois o menino tem todas as qualidades para isto. Mas o tempo revelará que nem sempre as coisas são o que aparentam.</Text>
            <GoBack/>
        </SCreenScrollConatiner>
    )
}