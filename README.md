# R10

This is a cross-platform mobile app project at RED Academy App Developer Program. It is a conference atendeee app, where the user can check the schedule, select her favourite sessions and get other informations about the conference. The app was created using React Native and required minimal adaptation to run on iOS and Android using the same code base. For the database, it consumes a GraphQL endpoint using Appolo. Local app data persistence leverages AsyncStorage.

## App Screenshots

<div style="border: 1px; boarder-color: #000000">
![Schedule Screen](/public/screenshots/schedule_screen.png =320x568)
</div>
<div style="border: 1px; boarder-color: #000000">
![Session Screen](/public/screenshots/session_screen.png =320x568)
</div>

## About the Author

I am an experienced Product Manager working in the Tech Industry. He was the project manager, focusing on the value proposition, quality and delivery. You can connect with me on LinkedIn [here](https://www.linkedin.com/in/andre-marques-moura).

## Main Takeaways

In this project, I have learned how React Native is a powerful and practical tool for creating modern mobile apps that run natively in both iOS and Android. Here are some of the main takeaways:

- Meteor provides the environment both for the server and the client. One of its main features is the shared code between server and client. It also eliminates the need to manage context and states in React applications.

---

## Technologies Used

- React Native
- Apollo
- GraphQL
- AsyncStorage
- XCode
- Android Studio

## Instructions for Running

### Installation of required modules

```bash
yarn
```

Or

```bash
npm install
```

### Run iOS

```bash
react-native run-ios
```

### Run Android

Start your Android emulator from Android Studio. Then, run this command.

```bash
react-native run-android
```
