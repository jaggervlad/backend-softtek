export interface CharacterRepository {
  fetchAllCharacters(): Promise<any>;
  fetchCharacterById(id: string): Promise<any>;
}
