import React from "react";
import { HomeList,Hero,SCreenScrollConatiner } from "~/components";

const FAKE_DATE_CHARACTERES = [
    {
        id:0,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYbM174xWDaTnMb40TN_IbfKPqD4bY7TN4Q&usqp=CAU",
        title:"bixo verde",
        type:"Personagem",
        subtitle:"Anakin Skywalker",
    },
    {
        id:1,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1l_sLpQ8XJtUEK49iQbJQptRnNzufKyYow&usqp=CAU",
        title:"mulher",
        type:"Personagem",
        subtitle:"Anakin Skywalker",
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
        title:"urso feio",
        type:"Personagem",
        subtitle:"Anakin Skywalker",
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
    return(
        <SCreenScrollConatiner aling="flex-start" just="flex-start">
            <Hero item={{
                title:"Episódio 1",
                type:"Filme",
                subtitle:"A Ameaça Fantasma",
                image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEwPmIPo9Cj5hk-qFZAfrrt32kdzFf1qqUjfZyJJlb7N9pqmUHpbtVUShx-8U6FGOeiI&usqp=CAU"
            }}/>
            
            <HomeList data={FAKE_DATE_FILMS} title="Filmes"/>
            <HomeList data={FAKE_DATE_CHARACTERES} title="Personagems"/>
        </SCreenScrollConatiner>
    )
}