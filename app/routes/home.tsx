import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { Start } from "../start/start"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gurveer Khaira" },
    { name: "description", content: "My portfolio." },
  ];
}

export default function Home() {
  return <Start />;
}
