import { translatePropertyName } from '../../../lib/change-property-names';
import { translationsCharacter } from '../../../i18n/character';
import { CharacterRepository } from '../domain/character.repository';

export class CharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async fetchAllCharacters() {
    try {
      const data = await this.characterRepository.fetchAllCharacters();

      const mappedCharacters = data?.results?.map((c: Record<string, string>) =>
        translatePropertyName(c, translationsCharacter)
      );

      return mappedCharacters;
    } catch (error) {
      throw new Error('Error obteniendo personajes');
    }
  }
  async fetchCharacterById(id: string) {
    try {
      const data = await this.characterRepository.fetchCharacterById(id);

      return translatePropertyName(data, translationsCharacter);
    } catch (error) {
      throw new Error(`Error obteniendo personsaje ${id}`);
    }
  }
}
