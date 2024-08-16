"use client"

import { useSession } from "next-auth/react";
import {App} from "../app/components/App";

export default function Home() {
  const session = useSession();
  return (
    
    <div>
      
      {JSON.stringify(session)}
    </div>
  );
}
