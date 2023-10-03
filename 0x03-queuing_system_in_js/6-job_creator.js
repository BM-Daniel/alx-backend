import { createQueue } from "kue";


const queue = createQueue();
const jobData = {
  phoneNumber: '233501234567',
  message: 'This is the code to verify your account',
};

const job = queue.create('push_notification_code', jobData).save(function (err) {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  } else {
    console.error(`Error creating notification job ${err}`);
  }
});

job.on('complete', function () {
  console.log('Notification job completed');
});

job.on('failed', function () {
  console.log('Notification job failed');
});
