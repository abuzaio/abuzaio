import { useRouter } from "next/dist/client/router";
import ProjectSection from "../../../components/sections/Project";

export default function Projects() {
  const router = useRouter();
  const { type } = router.query;

  return <ProjectSection type={type} />;
}
