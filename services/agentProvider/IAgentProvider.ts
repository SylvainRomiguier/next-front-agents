export interface IAgentProvider {
  getAgentById(id: string): Promise<ProvidedAgent | null>;
  getAgents(): Promise<ProvidedAgent[]>;
  createAgent(agent: ProvidedAgent): void;
  updateAgent(agent: ProvidedAgent): void;
}

export class ProvidedAgent {
  id!: string;
  name!: string;
  firstName!: string;
  lastName!: string;
  phone!: string;
  email!: string;
  photoUrl!: string;
}
