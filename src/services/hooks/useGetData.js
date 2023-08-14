import { api } from "../api";

export const useGetData = () => {

    const getFilms = async () => {
        try {
            const response = await api.get('/films ') 
            console.log(response);
            return response.data
        } catch (error) {
            console.log({error});
            return {error}
        }
    }

    const getCharacters = async () => {
        try {
            const response = await api.get('/characters ') 
            console.log(response);
            return response.data
        } catch (error) {
            console.log({error});
            return {error}
        }
    }

    return {
        getFilms,
        getCharacters,
    }
}