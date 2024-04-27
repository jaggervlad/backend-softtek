import { CharacterAxioRepository } from './character.axios.repository';
import { CharacterUseCase } from '../application/character.use-case';

class CharacterService {
  characterUseCase: CharacterUseCase;

  constructor() {
    this.characterUseCase = new CharacterUseCase(new CharacterAxioRepository());
  }

  async fetchAllCharacters() {
    return await this.characterUseCase.fetchAllCharacters();
  }

  async fetchCharacterById(id: string) {
    return await this.characterUseCase.fetchCharacterById(id);
  }
}

export const characterService = new CharacterService();

