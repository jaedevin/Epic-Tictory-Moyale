// documentation https://chaturbate.com/apps/docs/index.html
// support apps@chaturbate.com
// https://testbed.chaturbate.com
//
// cb.sendNotice(msg1, [to_user], [background], [foreground], [weight], [to_group])
//

//
// PSA
//

function sendNotice(username){
  let msgBg = '#7851A9';
  let msgColor = '#FFFFFF';
  let msg1 = (username == null)
    ? '🚨 Attention All Streamers and Fans! 🚨'
    : '🚨 Attention ' + username + '! 🚨';
  let msg2 = 'PewDiePie is in great danger and need your help, to wipe out T-Series for once and for all.';

  cb.sendNotice(msg1);
  cb.sendNotice(msg1, [to_user], msgBg, msgColor);
}

function scheduleNotice() {
    sendNotice(null);
    cb.setTimeout(scheduleNotice, 1000 * 60 * 10);
}

//
//  Events
//

cb.onEnter(function(user) {
  sendNotice(user['user']);
});

cb.setTimeout(scheduleNotice, 1000);
