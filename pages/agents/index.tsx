import { SlideFade } from "@chakra-ui/react";
import { NextPage } from "next";
import { useCallback, useContext, useEffect } from "react";
import { servicesContext } from "../../services";
import { ProvidedAgent } from "../../services/agentProvider/IAgentProvider";
import AgentCard from "../../UI/AgentCard";
import ItemsList from "../../UI/ItemsList";

const Agents: NextPage = () => {
  const { useAgentProvider } = useContext(servicesContext);
  const {getAgents, toggleActivation, getAgentById, agents} = useAgentProvider();

  const onToggleActivation = useCallback(
    (agent: ProvidedAgent) => async () => {
      await toggleActivation(agent.activationUrl);
      await getAgents();
    },
    []
  );

  const onViewDetails = useCallback(
    (agent: ProvidedAgent) => async () => {
      const agentResponse = await getAgentById(agent.detailsUrl);
      alert(JSON.stringify(agentResponse));
    },
    []
  )

  useEffect(() => {
    (async()=> await getAgents())();
  }, []);

  return (
    <ItemsList>
      {agents.map((agent, index) => (
        <SlideFade key={agent.id} offsetY={index * 20} in={true}>
          <AgentCard
            agent={agent}
            onToggleActivation={onToggleActivation(agent)}
            onClick={onViewDetails(agent)}
          />
        </SlideFade>
      ))}
    </ItemsList>
  );
};

export default Agents;
