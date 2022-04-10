export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterApiResultDescription;
  location: CharacterApiResultDescription;
  image: string;
  episode: string[];
  url: string;
  created: string;
}


export interface CharacterApiResultDescription {
  name: string;
  url: string;
}
