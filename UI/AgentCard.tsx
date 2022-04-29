import { Box, Button, Image } from "@chakra-ui/react";
import { ProvidedAgent } from "../services/agentProvider/IAgentProvider";

const AgentCard: React.FC<{
  agent: ProvidedAgent;
  onToggleActivation: () => void;
  onClick: () => void;
}> = ({ agent, onToggleActivation, onClick }) => {
  const toggleActivationButtonLabel =
    agent.status === "Activated" ? "Deactivate" : "Activate";
  return (
    <Box
      display="flex"
      alignItems="center"
      w="md"
      borderWidth="1px"
      borderColor="lightBlue"
      borderRadius="lg"
    >
      <Box w="100px" p="10px">
        <Image src={agent.photoUrl} alt={agent.name} />
      </Box>

      <Box p="6" w="70%">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {agent.name}
        </Box>

        <Box display="flex" gap="10px">
          <Box fontWeight="bold">Phone</Box>
          <Box>{agent.phone}</Box>
        </Box>

        <Box
          display="flex"
          gap="10px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          <Box fontWeight="bold">Email</Box>
          <Box>{agent.email}</Box>
        </Box>
        <Box d="flex" justifyContent="space-between">
          <Button onClick={onToggleActivation}>
            {toggleActivationButtonLabel}
          </Button>
          <Button onClick={onClick}>details</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AgentCard;
