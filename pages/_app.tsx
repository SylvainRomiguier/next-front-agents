import "../styles/globals.css";
import type { AppProps } from "next/app";
import Services, { IServices } from "../services";
import { AgentProvider } from "../services/agentProvider/AgentProvider";

const createProvidedServices = (): IServices => ({
  agentProvider: new AgentProvider(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Services createProvidedServices={createProvidedServices}>
      <Component {...pageProps} />
    </Services>
  );
}

export default MyApp;
