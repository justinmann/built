import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import { setClaim, removeClaim } from '../../utils/customClaims'

export default functions
  .database.ref('admins/{uid}/')
  .onWrite(async (snap, context) => {
    const value = snap.after.val()
    const uid = context.params.uid

    if (value) {
      await admin
        .firestore()
        .doc(`/admins/${uid}/`)
        .set({ isAdmin: value })
      await customClaims.setClaim(uid, 'admin')
    } else {
      await admin
        .firestore()
        .doc(`/admins/${uid}/`)
        .delete()
      await customClaims.removeClaim(uid, 'admin')
    }

    return
  })
