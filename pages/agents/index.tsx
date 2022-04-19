import { NextPage } from "next";
import { useCallback, useContext, useEffect, useState } from "react";
import { servicesContext } from "../../services";
import { ProvidedAgent } from "../../services/agentProvider/IAgentProvider";

const Agents: NextPage = () => {
  const [agents, setAgents] = useState<ProvidedAgent[]>([]);
  const { agentProvider } = useContext(servicesContext);

  const loadAgents = useCallback(async () => {
    setAgents(await agentProvider.getAgents());
  }, [agentProvider]);

  useEffect(() => {
    loadAgents();
  }, [loadAgents]);

  return <div>{JSON.stringify(agents)}</div>;
};

export default Agents;
