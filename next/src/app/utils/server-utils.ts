import "server-only";
export function serverSideFunction() {
  console.log(
    `we can use multiple libraries here, environment variables, interact with database, process confidential information `
  );
  return "This Is From Server Side Function";
}
