import { IAgentProvider, ProvidedAgent } from "./IAgentProvider";

export class AgentProvider implements IAgentProvider {
  getAgentById(id: string): Promise<ProvidedAgent | null> {
    throw new Error("Method not implemented.");
  }
  getAgents(): Promise<ProvidedAgent[]> {
    throw new Error("Method not implemented.");
  }
  createAgent(agent: ProvidedAgent): void {
    throw new Error("Method not implemented.");
  }
  updateAgent(agent: ProvidedAgent): void {
    throw new Error("Method not implemented.");
  }
}
