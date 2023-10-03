import { expect } from 'chai';
import createPushNotificationsJobs from './8-job';
import { createQueue } from 'kue';
import { describe, it, before, after, afterEach } from 'mocha';


const queue = createQueue();

describe('Function test on createPushNotificationsJobs', function () {
  before(function () {
    queue.testMode.enter();
  });

  afterEach(function () {
    queue.testMode.clear();
  });

  after(function () {
    queue.testMode.exit();
  });

  it('Error message to show if job is not an array', function() {
    expect(() => createPushNotificationsJobs('job', queue)).to.throw(Error, 'Jobs is not an array');
  });

  it('Test to verify if jobs are created', function () {
    const jobs = [
      {phoneNumber: '4235675432', message: 'Number verified'},
      {phoneNumber: '4239876543', message: 'Number verified'},
    ];

    createPushNotificationsJobs(jobs, queue);

    expect(queue.testMode.jobs.length).to.equal(2);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[0].data).to.eql(jobs[0]);
    expect(queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[1].data).to.eql(jobs[1]);
  });
});
