import "../styles/globals.css";
import type { AppProps } from "next/app";
import Services, { IServices } from "../services";
import { agentProvider } from "../services/agentProvider/AgentProvider";
import { ChakraProvider } from "@chakra-ui/react";

const createProvidedServices = (): IServices => ({
  useAgentProvider: agentProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Services createProvidedServices={createProvidedServices}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Services>
  );
}

export default MyApp;
