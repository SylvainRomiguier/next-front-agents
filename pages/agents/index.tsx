import { SlideFade } from "@chakra-ui/react";
import { NextPage } from "next";
import { useCallback, useContext, useEffect, useState } from "react";
import { servicesContext } from "../../services";
import { ProvidedAgent } from "../../services/agentProvider/IAgentProvider";
import AgentCard from "../../UI/AgentCard";
import ItemsList from "../../UI/ItemsList";

const Agents: NextPage = () => {
  const [agents, setAgents] = useState<ProvidedAgent[]>([]);
  const { agentProvider } = useContext(servicesContext);

  const loadAgents = useCallback(async () => {
    setAgents(await agentProvider.getAgents());
  }, [agentProvider]);

  useEffect(() => {
    loadAgents();
  }, [loadAgents]);

  return (
    <ItemsList>
      {agents.map((agent, index) => (
        <SlideFade key={agent.id} offsetY={index * 20} in={true}>
          <AgentCard agent={agent} />
        </SlideFade>
      ))}
    </ItemsList>
  );
};

export default Agents;
