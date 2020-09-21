import { IncomingMessage, ServerResponse } from "http";

const allUsers = async (request = IncomingMessage, response = ServerResponse) => {
  response.end(JSON.stringify({ hello: "world" }));
};

export default allUsers;
