import { createClient, print } from "redis";


const client = createClient();

client.on('error', function (err) {
  console.error(err);
});

const hashName = 'HolbertonSchools';
const data = {
  'Portland': 50,
  'Seattle': 80,
  'New York': 20,
  'Bogota': 20,
  'Cali': 40,
  'Paris': 2,
}

for (const field in data) {
  const dataValue = data[field];
  client.hset(hashName, field, dataValue, print);
}

client.hgetall(hashName, function (err, res) {
  if (err) throw Error(err);

  console.log(res);
})
