import ClientComponentOne from "@/components/client-component-one/page";
import ServerComponentOne from "@/components/server-component-one/page";

export default function InterLeavingPage() {
  return (
    <>
      <h1>This is InterLeavingPage</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
