import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">⚽ Renaissance</h1>
      <Button variant="default">Join the Revolution</Button>
    </main>
  );
}
