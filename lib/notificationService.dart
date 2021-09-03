// import 'package:flutter/cupertino.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter_local_notifications/flutter_local_notifications.dart';

// class NotificationService extends ChangeNotifier {
//   final FlutterLocalNotificationsPlugin _flutterLocalNotificationsPlugin =
//       FlutterLocalNotificationsPlugin();

//   //initilize

//   Future initialize() async {
//     FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
//         FlutterLocalNotificationsPlugin();

//     AndroidInitializationSettings androidInitializationSettings =
//         AndroidInitializationSettings("ic_stat_name");

//     IOSInitializationSettings iosInitializationSettings =
//         IOSInitializationSettings();

//     final InitializationSettings initializationSettings =
//         InitializationSettings(
//             android: androidInitializationSettings,
//             iOS: iosInitializationSettings);

//     await flutterLocalNotificationsPlugin.initialize(initializationSettings);
//   }

//   //Instant Notifications
//   Future instantNofitication() async {
//     var android = AndroidNotificationDetails("id", "channel", "description",
//         sound: RawResourceAndroidNotificationSound("happi1"));

//     var ios = IOSNotificationDetails();

//     var platform = new NotificationDetails(android: android, iOS: ios);

//     await _flutterLocalNotificationsPlugin.show(
//         0, "Demo instant notification", "Tap to do something", platform,
//         payload: "Welcome to demo app");
//   }

//   //Image notification
//   // Future imageNotification() async {
//   //   var bigPicture = BigPictureStyleInformation(
//   //       DrawableResourceAndroidBitmap("ic_launcher"),
//   //       largeIcon: DrawableResourceAndroidBitmap("ic_launcher"),
//   //       contentTitle: "Demo image notification",
//   //       summaryText: "This is some text",
//   //       htmlFormatContent: true,
//   //       htmlFormatContentTitle: true);

//   //   var android = AndroidNotificationDetails("id", "channel", "description",
//   //       styleInformation: bigPicture,
//   //       sound: RawResourceAndroidNotificationSound("happi1"));

//   //   var platform = new NotificationDetails(android: android);

//   //   await _flutterLocalNotificationsPlugin.show(
//   //       0, "Demo Image notification", "Tap to do something", platform,
//   //       payload: "Welcome to demo app");
//   // }

//   //Stylish Notification
//   // Future stylishNotification() async {
//   //   var android = AndroidNotificationDetails("id", "channel", "description",
//   //       color: Colors.deepOrange,
//   //       enableLights: true,
//   //       enableVibration: true,
//   //       largeIcon: DrawableResourceAndroidBitmap("ic_stat_name"),
//   //       styleInformation: MediaStyleInformation(
//   //           htmlFormatContent: true, htmlFormatTitle: true));

//   //   var platform = new NotificationDetails(android: android);

//   //   await _flutterLocalNotificationsPlugin.show(
//   //       0, "Demo Stylish notification", "Tap to do something", platform);
//   // }

//   //Sheduled Notification

//   Future sheduledNotification() async {
//     var interval = RepeatInterval.everyMinute;
//     var bigPicture = BigPictureStyleInformation(
//         DrawableResourceAndroidBitmap("ic_stat_name"),
//         largeIcon: DrawableResourceAndroidBitmap("ic_stat_name"),
//         contentTitle: "Demo image notification",
//         summaryText: "This is some text",
//         htmlFormatContent: true,
//         htmlFormatContentTitle: true);

//     var android = AndroidNotificationDetails("id", "channel", "description",
//         // styleInformation: bigPicture,
//         sound: RawResourceAndroidNotificationSound("happi1"));

//     var platform = new NotificationDetails(android: android);

//     await _flutterLocalNotificationsPlugin.periodicallyShow(
//         0,
//         "Demo Sheduled notification",
//         "Tap to do something",
//         interval,
//         platform);
//   }

//   //Cancel notification

//   Future cancelNotification() async {
//     await _flutterLocalNotificationsPlugin.cancelAll();
//   }
// }
