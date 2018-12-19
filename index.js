// documentation https://chaturbate.com/apps/docs/index.html
// support apps@chaturbate.com
// https://testbed.chaturbate.com
//
// cb.sendNotice(msg1, [to_user], [background], [foreground], [weight], [to_group])
//

//
// PSA
//

function sendNotice(user){
  let msgBg = '#7851A9';
  let msgColor = '#FFFFFF';
  let msg1 = (user == null)
    ? '🚨 Attention All Streamers and Fans! 🚨'
    : '🚨 Attention ' + user['user'] + '! 🚨';
  let messages = [
    msg1,
    'PewDiePie is in great danger and need your help, to wipe out T-Series for once and for all.',
    'To help him, all PewDiePie needs is for you to subscribe to his channel - it\'s pretty easy.',
    'Be sure to hit that bell and turn the notifications on, and spread the news with all your friends throughout the world. But you have to be quick, so PewDiePie can achieve the Epic Victory.',
    'https://youtube.com/pewdiepie',
  ];

  messages.map((msg) => {
    cb.sendNotice(msg, user, msgBg, msgColor);
  });
}

function scheduleNotice() {
    sendNotice(null);
    cb.setTimeout(scheduleNotice, 1000 * 60 * 10);
}

//
//  Events
//

cb.onEnter(function(user) {
  sendNotice(user);
});

cb.setTimeout(scheduleNotice, 1000);
