import { createClient, print } from "redis";
import { promisify } from "util";


const client = createClient()
  .on('connect', () => {
    console.log('Redis client connected to the server');
  })
  .on('error', (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
  });

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

const clientGet = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
  try {
    const res = await clientGet(schoolName);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
