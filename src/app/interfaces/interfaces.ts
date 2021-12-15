// interfaces para obtener el nombre de la url de capitulos en listados de personajes
export interface personajesNUCL{

    id:number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: {
      name: string,
      url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: Date,
    capitulos: capitulosNUCL[];

}

export interface capitulosNUCL{

    url: string,
    name: string

}

// interfaces para obtener el nombre de la url de personajes en listados de capitulos

export interface capitulosNUPL{

    id: number;
    name: string,
    air_date: Date,
    episode: string,
    characters: string[],
    url: string,
    created: Date
    personajes: personajesNUPL[],
}


export interface personajesNUPL{

    url: string,
    name: string
}





