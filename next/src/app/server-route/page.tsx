import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoutePage() {
  // imported function will be executed on server and we can see it in terminal
  const result = serverSideFunction();
  console.log("Server Side Function Executed");

  return (
    <div>
      <h1>Server Route Page</h1>
      <div>Result from server side route: {result} </div>
    </div>
  );
}
