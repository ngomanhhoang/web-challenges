// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

import { NFSAT, FISHSAT } from "./payload/satellites.js";

export default function launch() {
    const payload = [NFSAT, FISHSAT]
    payload.forEach((sat) => loadPayload(sat))
  
  fuel();

  for (let i = 5; i > 0; i--) {
    countdown();
  }
  liftoff();
  deployPayload( NFSAT, FISHSAT);
}
