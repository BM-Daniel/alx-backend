function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach(function (value) {
    const job = queue.create('push_notification_code_3', value).save(function (err) {
      if (!err) {
        console.log(`Notification job created: ${job.id}`);
      }
    });

    job.on('complete', function () {
      console.log(`Notification job ${job.id} completed`);
    })
    .on('failed', function (err) {
      console.error(`Notification job ${job.id} failed: ${err}`);
    })
    .on('progress', function (progress, data) {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    })
  })
}

module.exports = createPushNotificationsJobs;
