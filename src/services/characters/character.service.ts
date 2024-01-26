import axios from 'axios';
import { changePropertyNames } from '../../lib/change-property-names';
import { translationsCharacter } from '../../tranlations/character';

const SW_URL_API = process.env.SW_URL_API;

if (!SW_URL_API) {
  throw new Error('Noo url api provided');
}

class CharacterService {
  swApi;

  constructor() {
    this.swApi = axios.create({
      baseURL: process.env.SW_URL_API,
    });
  }

  async fetchAllCharacters() {
    const res = await this.swApi.get('/people');
    const data = res.data;

    if (!data) throw new Error('Not data available');

    const mappedCharacters = data?.results?.map((c: Record<string, string>) =>
      changePropertyNames(c, translationsCharacter)
    );

    return mappedCharacters;
  }

  async fetchCharacterById(id: string) {
    const res = await this.swApi.get(`/people/${id}`);
    const data = res.data;

    if (!data) throw new Error('Not data available');

    return changePropertyNames(data, translationsCharacter);
  }
}

export const characterService = new CharacterService();
