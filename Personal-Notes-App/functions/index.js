const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.addPremiumRole = functions.https.onCall((data, context) => {
  const { uid } = data || {}
  return admin.auth().setCustomUserClaims(uid, { premium: true })
    .then(() => ({ message: `Success! User with uid ${uid} has been made premium.` }))
    .catch(e => e)
})

exports.revokePremiumRole = functions.https.onCall((data, context) => {
  if (!context.auth.token.premium) {
    return new Error(`You're not a premium member`)
  }

  const { uid } = data || {}
  return admin.auth().setCustomUserClaims(uid, { premium: false })
    .then(() => ({ message: `Success! Membership of user with uid ${uid} has been revoked.` }))
    .catch(e => e)
})
