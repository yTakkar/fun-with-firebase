# Fun-With-Firebase

This repo showcases some projects created keeping Firebase in mind as a replacement for a backend server.

### Album-App
- Upload files with a progressbar and view all your uploaded files in realtime.
- Uses `Storage` and `Firestore`
- [View project](https://github.com/yTakkar/fun-with-firebase/tree/master/Album-App)
- [Demo](https://firebase-album-app.surge.sh)

### Proverbs-App
- `Add`, `Update`, `Delete`, `View` and `List` proverbs.
- [View project](https://github.com/yTakkar/fun-with-firebase/tree/master/Proverbs-App)
- [Demo](https://firebase-proverbs-app.surge.sh/)

### Personal-Notes-App
- Add your peronal notes.
- Create an account.
- Realtime auth functionalities.
- Integrated with `redux` store.
- Provides `Register`, `Login` and `Logout` features to a user.
- Once loggedIn, user can manage his notes.
- [View project](https://github.com/yTakkar/fun-with-firebase/tree/master/Personal-Notes-App)
- [Demo](https://firebase-personal-notes-app.now.sh)

**[...More to come]**

*Note: All of the above projects were boostrapped with CRA.*

## Development
- Open any one of the project.
- Create an `.env`. Populate it with Firebase init options. [For more clearity, goto `<PROJECT>/src/firebase/init.js` file.]
- Run `yarn start`
