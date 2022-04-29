export interface IAgentProvider {
  agents: ProvidedAgent[];
  getAgentById(detailsUrl:string): Promise<ProvidedAgent | null>;
  getAgents(): Promise<void>;
  createAgent(agent: ProvidedAgent): Promise<ProvidedAgent>;
  updateAgent(detailsUrl:string, agent: ProvidedAgent): Promise<ProvidedAgent>;
  toggleActivation(activationUrl: string): Promise<void>;
}

export class ProvidedAgent {
  id!: string;
  name!: string;
  firstName!: string;
  lastName!: string;
  phone!: string;
  email!: string;
  photoUrl!: string;
  status!:string;
  activationUrl!:string;
  detailsUrl!:string;
}
