import Navbar from "./Navbar";
import Transition from "./Transition";
import ParticlesBackground from "./Particles";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative md:container md:px-0 mx-auto my-24 px-8 text-white text-xl">
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>
      <Navbar />
      <main>
        <Transition>{children}</Transition>
      </main>
      <Analytics />
    </div>
  );
}
