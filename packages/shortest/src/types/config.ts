export interface ShortestConfig {
  headless: boolean;
  baseUrl: string;
  testPattern: string;
  mailosaur?: {
    apiKey?: string;
    serverId?: string;
  };
}
