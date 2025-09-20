import { Suspense } from "react";
import GetConnectedPage from "./GetConnectedPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetConnectedPage />
    </Suspense>
  );
}
