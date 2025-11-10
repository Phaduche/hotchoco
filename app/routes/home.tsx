import type { Route } from "./+types/home";
import { redirect } from "react-router";

export const loader: Route.Loader = () => redirect("/profile");

export default function Home() { return null;
}
