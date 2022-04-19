import { StarIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import { ProvidedAgent } from "../services/agentProvider/IAgentProvider";

const AgentCard: React.FC<{ agent: ProvidedAgent }> = ({ agent }) => {
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

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 3 ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            15 reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AgentCard;
