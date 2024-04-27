import axios from 'axios';
import { SW_URL_API } from '../../../shared/contants';

export class CharacterAxioRepository {
  swApi;

  constructor() {
    this.swApi = axios.create({
      baseURL: SW_URL_API,
    });
  }

  async fetchAllCharacters() {
    try {
      const res = await this.swApi.get('/people');
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async fetchCharacterById(id: string) {
    try {
      const res = await this.swApi.get(`/people/${id}`);

      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
