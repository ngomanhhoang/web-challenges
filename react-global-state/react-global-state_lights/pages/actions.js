import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({lights, turnAllOn, turnAllOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions turnAllOn={turnAllOn} turnAllOff={turnAllOff} lights={lights}/>
    </>
  );
}
