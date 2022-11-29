import { useRouter } from "next/dist/client/router";
import PortfolioSection from "../../../components/sections/Portfolio";

export default function Portfolio() {
  const router = useRouter();
  const { type } = router.query;

  return <PortfolioSection type={type} />;
}
