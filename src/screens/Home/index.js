import React,{useEffect, useState} from "react";
import { HomeList,Hero,SCreenScrollConatiner,Loading } from "~/components";
import {useGetData} from "~/services/hooks"

const FAKE_DATE_CHARACTERES = [
    {
        id:0,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYbM174xWDaTnMb40TN_IbfKPqD4bY7TN4Q&usqp=CAU",
        title:"Yoda",
        type:"Personagem",
        subtitle:'O nome Yoda é derivado de "Yodeah"',
        description:"Medindo 76 centímetros de altura, Yoda é um membro de uma espécie de nome desconhecido. Ele foi o Grão Mestre da Ordem Jedi durante as Guerras Clônicas, um dos membros mais importantes do Alto Conselho Jedi nos últimos dias da República Galáctica, e um dos mais sábios e poderosos Jedi de todos os tempos. Tendo vivido por muito tempo (veio a falecer com aprox. 900 anos de idade), ele tinha excepcionais habilidades no combate de sabre de luz, onde usava as técnicas acrobáticas da Forma IV, além de um fenomenal conhecimento sobre a Força. De 300 ABY até 19 ABY ele treinou quase todos os Jedi da Galáxia — como Grande Mestre, ele instruia todos os Younglings do Templo Jedi antes deles serem adotados por um mestre, tendo Anakin Skywalker sido uma exceção quanto a isso."
    },
    {
        id:1,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1l_sLpQ8XJtUEK49iQbJQptRnNzufKyYow&usqp=CAU",
        title:"Rey",
        type:"Personagem",
        subtitle:"Anakin Skywalker",
        description:"Rey é uma personagem fictícia do universo Star Wars interpretada pela atriz Daisy Ridley. Ela é a principal protagonista da trilogia de sequência, aparecendo pela primeira vez em Star Wars: O Despertar da Força."
    },
    {
        id:2,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEwPmIPo9Cj5hk-qFZAfrrt32kdzFf1qqUjfZyJJlb7N9pqmUHpbtVUShx-8U6FGOeiI&usqp=CAU",
        title:"Darth vader",
        description:'Darth Vader é um personagem fictício da franquia Star Wars. O personagem é o antagonista central da trilogia original e, como Anakin Skywalker, é um dos principais protagonistas de toda a trilogia prequela. O criador de Star Wars, George Lucas, se referiu coletivamente aos seis primeiros filmes episódicos da franquia como "a tragédia de Darth Vader".[1] Ele se tornou um dos vilões mais icônicos da cultura popular e foi listado entre os maiores vilões e personagens fictícios de todos os tempo. Originalmente um escravo em Tatooine, Anakin Skywalker era um Jedi profetizado para trazer equilíbrio à Força. Ele é atraído para o lado negro da Força pelo Chanceler Sheev Palpatine/Darth Sidious e se torna um Lorde Sith, assumindo o título de Darth Vader. Após uma batalha de sabre de luz com seu ex-mentor Obi-Wan Kenobi em Mustafar, na qual ele fica gravemente ferido, Vader é transformado em um ciborgue. Ele então serve ao Império Galáctico por mais de duas décadas como seu principal executor. Vader se redime salvando seu filho, Luke Skywalker, e matando Palpatine, sacrificando sua própria vida no processo. Ele também é o marido secreto de Padmé Amidala, o pai biológico da princesa Leia, e o avô de Kylo Ren (Ben Solo). Na continuidade não canônica de Star Wars, ele também é avô de Ben Skywalker, seu epônimo Anakin Solo, Jaina Solo e Darth Caedus (Jacen Solo), e bisavô de Allana Solo.',
        subtitle:"Anakin Skywalker",
        type:"Personagem"
    },
    {
        id:3,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWARDwwkK70iVu1vPMZ-MeNQdPHerE11f7cKqIxQGWT87MgGQ7tYyyLB0CrGO1FJcZBo&usqp=CAU",
        title:"Chewbacca",
        type:"Personagem",
        subtitle:" Chewie",
        description:"Na série Star Wars (Guerra nas Estrelas), Chewbacca — apelido: Chewie — é o copiloto da nave Millennium Falcon e o melhor amigo de Han Solo, e um alienígena da raça Wookiee, oriundo do planeta Kashyyyk. Tendo participado de sete dos nove filmes da franquia (A Vingança dos Sith, Uma Nova Esperança, O Império Contra-Ataca, O Retorno do Jedi, O Despertar da Força, Os Últimos Jedi e A Ascensão Skywalker). Chewie é um excelente mecânico, muito sábio e temperamental. Foi interpretado por Peter Mayhew, que, com seus 2,15 m, foi escolhido por George Lucas.[1]"
    },
]
const FAKE_DATE_FILMS = [
    {
        id:0,
        image_url:"https://www.suomalainen.com/cdn/shop/products/49532ec584f14d738da42079d45c8a049789520425807_1_1ee0b439-b085-4768-afc7-f8e5d0cf1a85.jpg?v=1679808548&width=800",
        type:"Filme"
    },
    {
        id:1,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2R4TaRxOy2rZMEWr5032_1ydMxs8mLzDhPBKegKzi84TrSvG6-64hzZh8eWj4E95fZk&usqp=CAU",
        type:"Filme"
    },
    {
        id:2,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOrHtgcpTqimpGMOK8W_f8iEL-OHQEDQaB8wH2fn4qaCKtoODuwEMk2qdkdu8_9qro2M&usqp=CAU",
        type:"Filme"
    },
    {
        id:3,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUv5SczIJQ5AKN6vVUzC4N9P2WYSwLMgg_ZpFsWUpdy8EwLZKsUWKEBdR54SBDZ28aSNw&usqp=CAU",
        type:"Filme"
    },
]

export const Home = () => {
    const { getFilms,getCharacters } = useGetData()
    const [loading,setLoading] = useState(false)
    const [films,setFilms] = useState([])
    const [characters,setCharacters] = useState([])

    console.log({
        loading,
        films,
        characters
    });

    const callGetData = async () => {
        const filmsResponse = await getFilms()
        const charactersResponse = await getCharacters()

        if(!filmsResponse.error && !charactersResponse.error){
            setFilms(filmsResponse)
            setCharacters(charactersResponse)
            setLoading(false)
        }
    }

    useEffect(() => {
        callGetData()
    },[])


    if(loading){
        return(
            <SCreenScrollConatiner>
                <Loading />
            </SCreenScrollConatiner>
        )
    }

    return(
        <SCreenScrollConatiner aling="flex-start" just="flex-start">
            <Hero item={{
                ...FAKE_DATE_FILMS[0],
                type:"Filme"
            }}/>
            
            <HomeList data={FAKE_DATE_FILMS} title="Filmes" type="Filme"/>
            <HomeList data={FAKE_DATE_CHARACTERES} title="Personagems" type="Personagem"/>
        </SCreenScrollConatiner>
    )
}