import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_archive/flutter_archive.dart';
// import 'package:archive/archive.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:happiticket/auth/login.dart';
import 'package:happiticket/drawer.dart';
import 'package:happiticket/notificationService.dart';
import 'package:happiticket/static/SizeConfig.dart';
import 'package:happiticket/static/apiServices.dart';
import 'package:happiticket/static/constants.dart';
import 'package:open_file/open_file.dart';
import 'package:overlay_support/overlay_support.dart';
import 'package:overlay_support/overlay_support.dart' as overlay;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

import 'package:local_assets_server/local_assets_server.dart';
import 'notification.dart';
import 'package:flutter_downloader/flutter_downloader.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:dio/dio.dart';

String userId = "";
int version = 0;

const AndroidNotificationChannel channel = AndroidNotificationChannel(
    'high_importance_channel', // id
    'High Importance Notifications', // title
    'This channel is used for important notifications.', // description
    importance: Importance.high,
    playSound: true);

final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
    FlutterLocalNotificationsPlugin();

Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  RemoteNotification notification = message.notification;
  AndroidNotification android = message.notification?.android;
  await Firebase.initializeApp();
  await flutterLocalNotificationsPlugin.show(
      notification.hashCode,
      notification.title,
      notification.body,
      NotificationDetails(
        android: AndroidNotificationDetails(
          "id",
          "channel",
          "description",
          color: Colors.blue,
          sound: RawResourceAndroidNotificationSound("happi1"),
          playSound: true,
          icon: '@mipmap/ic_launcher',
        ),
      ));
  print('A bg message just showed up :  ${message.messageId}');
}

final InAppLocalhostServer localhostServer = new InAppLocalhostServer();
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  await FirebaseMessaging.onBackgroundMessage(
      _firebaseMessagingBackgroundHandler);
  // await localhostServer.start();

  // if (Platform.isAndroid) {
  //   await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
  // }
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.createNotificationChannel(channel);

  await FirebaseMessaging.instance.setForegroundNotificationPresentationOptions(
    alert: true,
    badge: true,
    sound: true,
  );

  SharedPreferences prefs = await SharedPreferences.getInstance();
  userId = await prefs.getString("userId") ?? "";
  await FlutterDownloader.initialize(
      debug: true // optional: set false to disable printing logs to console
      );
  await Permission.storage.request();
  // print('jwt ${jwt}');
  runApp(new MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    // localNotification();
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return OverlaySupport(
      child: MaterialApp(
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            primaryColor: Color.fromRGBO(239, 142, 47, 1),
          ),
          home: InAppWebViewPage(userId: userId ?? "", url: webviewEnd)),
    );
  }
}

class InAppWebViewPage extends StatefulWidget {
  String userId;
  String url;
  InAppWebViewPage({this.userId, this.url});
  @override
  _InAppWebViewPageState createState() => new _InAppWebViewPageState();
}

class _InAppWebViewPageState extends State<InAppWebViewPage> {
  String updateString = "Checking for Updates!";
  bool load = false, showMenu = false;
  InAppWebViewController webView;
  @override
  void initState() {
    super.initState();
    // checkForUpdate();
    _initServer();
    if (widget.userId != "") fcmput();

    FirebaseMessaging.onMessage.listen(
      (RemoteMessage message) async {
        RemoteNotification notification = message.notification;
        AndroidNotification android = message.notification?.android;
        if (notification != null && android != null) {
          SizeConfig().init(context);
          print("on mesage ${notification.title}");
          overlay.showSimpleNotification(
            Text(
              notification.title,
            ),
            // leading: NotificationBadge(totalNotifications: _totalNotifications),
            subtitle: Row(
              children: [
                SizedBox(
                  width: SizeConfig.w * 0.65,
                  child: Text(message.data["status"],
                      // "           " +
                      // message["data"]["status"],
                      style: Theme.of(context)
                          .textTheme
                          .headline6
                          .copyWith(color: Colors.white),
                      maxLines: 2),
                ),
                FlatButton(
                  child: Text(
                    "Open",
                    style: Theme.of(context)
                        .textTheme
                        .headline6
                        .copyWith(color: Colors.white, fontSize: 18),
                  ),
                  onPressed: () async {
                    print(webviewBase + webviewEnd + widget.userId);

                    SharedPreferences prefs =
                        await SharedPreferences.getInstance();
                    userId = await prefs.getString("userId") ?? "";
                    if (userId != "")
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (_) => NotificationScreen(
                                  userId: userId,
                                  url: "http://localhost:$port/" +
                                      "redirect.html?id=")));
                    else
                      setState(() {
                        widget.userId = "";
                      });
                  },
                )
              ],
            ),
            slideDismiss: true,
            background: Theme.of(context).primaryColor,
            duration: Duration(seconds: 5),
          );

          // print("on message $message");
          // setState(() {
          //   webviewEnd = "ticket/ticket-list?id=";
          // });

          // Fluttertoast.showToast(
          //   msg: message["data"] ?? "notification has received",
          //   backgroundColor: Colors.grey[400],
          //   toastLength: Toast.LENGTH_LONG,
          //   gravity: ToastGravity.CENTER,
          //   timeInSecForIosWeb: 3,
          // );
        }
      },
    );
    FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) async {
      print('A new onMessageOpenedApp event was published!');
      RemoteNotification notification = message.notification;
      AndroidNotification android = message.notification?.android;
      print("on onLaunch $message");
      SharedPreferences prefs = await SharedPreferences.getInstance();
      userId = await prefs.getString("userId") ?? "";
      print(webviewBase + webviewEnd + userId);
      if (userId != "")
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (_) => NotificationScreen(
                    userId: userId,
                    url: "http://localhost:$port/" + "redirect.html?id=")));
      // print(webviewBase + webviewEnd + widget.userId);

      // Fluttertoast.showToast(
      //   msg: message["data"] ?? " on launch notification has received",
      //   backgroundColor: Colors.grey[400],
      //   toastLength: Toast.LENGTH_LONG,
      //   gravity: ToastGravity.CENTER,
      //   timeInSecForIosWeb: 3,
      // );
    });
  }

  unzip() async {
    String _dir, filename = "dist.zip";
    _dir = (await getExternalStorageDirectory()).path;

    final zipFile = File('$_dir/$filename');
    final destinationDir = Directory("$_dir");
    try {
      await ZipFile.extractToDirectory(
          zipFile: zipFile, destinationDir: destinationDir);
      await _initServer();

      setState(() {
        updating = false;
      });
    } catch (e) {
      print(e);
    }
  }

  checkForUpdate() async {
    setState(() {
      updating = true;
    });
    SharedPreferences prefs = await SharedPreferences.getInstance();
    version = await prefs.getInt("version") ?? 0;
    Map buildResponse =
        await ApiServices.getRequest(webviewBase + "build.json");
    Map menuResponse = await ApiServices.getRequest(baseUrl + "getConfigData");
    showMenu = menuResponse["data"]["config"]["sideMenubar"];
    print("$showMenu");
    print("respose ${buildResponse["version"]}");
    print("---version $version");
    if (version == 0) {
      await prefs.setInt("version", int.parse(buildResponse["version"] ?? "0"));

      await updateDist();
    } else if (version < int.parse(buildResponse["version"] ?? "0")) {
      await prefs.setInt("version", int.parse(buildResponse["version"] ?? "0"));

      String _dir, filename = "dist.zip";
      if (_dir == null) {
        _dir = (await getExternalStorageDirectory()).path;
      }
      File _localFile = File('$_dir/$filename');

      final file = await _localFile;
      if (await file.exists()) {
        await file.delete();
        final dir = Directory(_dir + "/dist");
        dir.deleteSync(recursive: true);
        await updateDist();
      } else {
        await updateDist();
      }
    } else {
      await _initServer();

      setState(() {
        updating = false;
      });
    }
  }

  bool updating = false;
  updateDist() async {
    setState(() {
      updateString = "updating!!!";
    });
    String _dir, filename = "dist.zip";
    if (_dir == null) {
      _dir = (await getExternalStorageDirectory()).path;
    }

    var progress;
    Dio().download(
      "https://ticket-management.happimobiles.com/" + filename,
      (await getExternalStorageDirectory()).path + "/$filename",
      onReceiveProgress: (rcv, total) {
        print(
            'received: ${rcv.toStringAsFixed(0)} out of total: ${total.toStringAsFixed(0)}');

        setState(() {
          progress = ((rcv / total) * 100).toStringAsFixed(0);
        });

        if (progress == '100') {
          unzip();
        } else if (double.parse(progress) < 100) {}
      },
      deleteOnError: true,
    ).then((_) {
      setState(() {
        if (progress == '100') {
          unzip();
        }
      });
    });
  }

  bool isListening = false;
  String address;
  int port;
  _initServer() async {
    //await getExternalStorageDirectory();
    // print((await getExternalStorageDirectory()).path + "/dist");
    final server = new LocalAssetsServer(
      address: InternetAddress.loopbackIPv4,
      // assetsBasePath: (await getExternalStorageDirectory()).path + "/dist/",
      assetsBasePath: "web/dist/",
      // rootDir:
    );

    final address = await server.serve();
    print("sdfsdf");
    print(server.boundPort);
    print(address.address);
    setState(() {
      this.address = address.address;
      port = server.boundPort;
      isListening = true;
      updating = false;
    });
  }

  String firebaseToken;

  fcmput() async {
    FirebaseMessaging messaging = FirebaseMessaging.instance;
    await messaging.getToken().then((String token) {
      // assert(token != null);
      firebaseToken = token;
      print("token-----$firebaseToken");
    }).catchError((e) => print(e.toString()));
    FirebaseMessaging.instance.requestPermission();
    Map<String, dynamic> fcmData = {
      "id": widget.userId,
      "notificattionToken": firebaseToken
    };
    print(fcmData);
    Map fcmRes =
        await ApiServices.putRequest(json.encode(fcmData), fcmEndPoint);
  }

  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);

    return Scaffold(
      key: _scaffoldKey,
      drawer: MainDrawer(),
      appBar: AppBar(
          iconTheme: IconThemeData(
            color: Colors.white, //change your color here
          ),
          automaticallyImplyLeading: false,
          leading: showMenu
              ? IconButton(
                  icon: Icon(Icons.menu),
                  onPressed: () {
                    _scaffoldKey.currentState.openDrawer();
                  })
              : Container(),
          centerTitle: true,
          actions: [
            widget.userId != ""
                ? IconButton(
                    icon: Icon(
                      Icons.logout,
                      color: Colors.white,
                    ),
                    onPressed: () async {
                      SharedPreferences prefs =
                          await SharedPreferences.getInstance();

                      await prefs.remove("userId");
                      setState(() {
                        widget.userId = "";
                      });
                    },
                  )
                : Container(),
            //clipboard
            // IconButton(
            //   icon: Icon(
            //     Icons.copy,
            //   ),
            //   onPressed: () {
            //     Clipboard.setData(ClipboardData(text: firebaseToken));
            //   },
            // )
          ],
          backgroundColor: Color.fromRGBO(239, 142, 47, 1),
          title: FittedBox(
              fit: BoxFit.fitWidth,
              child: Text(
                "Happi Mobiles Tickets Management",
                style: TextStyle(color: Colors.white),
              ))),
      body: WillPopScope(
        onWillPop: () async {
          bool goBack;
          var value = await webView.canGoBack(); // check webview can go back
          if (value) {
            webView.goBack(); // perform webview back operation
            return false;
          } else {
            await showDialog(
              context: context,
              builder: (context) => new AlertDialog(
                title: new Text('Confirmation ',
                    style: TextStyle(color: Colors.purple)),

                // Are you sure?

                content: new Text('Do you want exit app ? '),

                // Do you want to go back?

                actions: <Widget>[
                  new FlatButton(
                    onPressed: () {
                      Navigator.of(context).pop(false);

                      setState(() {
                        goBack = false;
                      });
                    },

                    child: new Text('No'), // No
                  ),
                  new FlatButton(
                    onPressed: () {
                      Navigator.of(context).pop();
                      SystemChannels.platform
                          .invokeMethod('SystemNavigator.pop');
                      return Future.value(true);
                    },

                    child: new Text('Yes'), // Yes
                  ),
                ],
              ),
            );

            if (goBack)
              Navigator.pop(context); // If user press Yes pop the page

            return goBack;
          }
        },
        child: updating
            ? Center(
                child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [CircularProgressIndicator(), Text(updateString)],
              ))
            : SafeArea(
                child: widget.userId == ""
                    ? Login()
                    : Center(
                        child: !isListening
                            ? CircularProgressIndicator()
                            : InAppWebView(
                                onDownloadStart: (controller, url) async {
                                  print("onDownloadStart $url");
                                  await Permission.storage.request();
                                  // String dir =
                                  //     "/storage/emulated/0/Downloads/HappiTickets/";
                                  final taskId =
                                      await FlutterDownloader.enqueue(
                                    url: url,
                                    savedDir:
                                        // dir,
                                        (await getExternalStorageDirectory())
                                            .path,
                                    showNotification:
                                        true, // show download progress in status bar (for Android)
                                    openFileFromNotification:
                                        true, // click on notification to open downloaded file (for Android)
                                  );

                                  print(
                                      "downloaded ${(await getExternalStorageDirectory()).path}");
                                  Future.delayed(Duration(seconds: 1));
                                  String dir =
                                      (await getExternalStorageDirectory())
                                          .path;

                                  if (await FlutterDownloader.open(
                                      taskId: taskId))
                                    // await FlutterDownloader.(taskId: taskId);
                                    print("pdf");
                                  await OpenFile.open(
                                      dir + "/" + url.split("/").last);
                                  print("opened");
                                },
                                initialUrl:
                                    // "http://localhost:8080/web/dist/redirect.html"
                                    //         "?id=" +
                                    //     widget.userId,
                                    "http://localhost:$port/" +
                                        "redirect.html" +
                                        "?id=" +
                                        widget.userId,
                                initialHeaders: {},
                                initialOptions: InAppWebViewGroupOptions(
                                    crossPlatform: InAppWebViewOptions(
                                        cacheEnabled: false,
                                        debuggingEnabled: true,
                                        useOnDownloadStart: true)),
                                onWebViewCreated:
                                    (InAppWebViewController controller) {
                                  webView = controller;
                                  controller.clearCache();
                                  controller.addJavaScriptHandler(
                                      handlerName: "imageUrl",
                                      callback: (args) async {
                                        // Here you receive all the arguments from the JavaScript side

                                        print("From the JavaScript side:");
                                        print(args[0]);
                                        print(args[0]);
                                        await Permission.storage.request();
                                        print("onDownloadStart ${args[0]}");
                                        //https://happimobiles.s3.amazonaws.com/happi_tickets/ticket/IVXANBRA-1626757250336.doc
                                        // await Permission.storage.request();
                                        print(
                                            (await getExternalStorageDirectory())
                                                .path);
                                        final taskId =
                                            await FlutterDownloader.enqueue(
                                          url: args[0],
                                          savedDir:
                                              (await getExternalStorageDirectory())
                                                  .path,
                                          showNotification:
                                              true, // show download progress in status bar (for Android)
                                          openFileFromNotification:
                                              true, // click on notification to open downloaded file (for Android)
                                        );
                                        print(
                                            "downloaded ${(await getExternalStorageDirectory()).path}");

                                        await FlutterDownloader.open(
                                            taskId: taskId);
                                        // await FlutterDownloader.(taskId: taskId);
                                        String dir =
                                            (await getExternalStorageDirectory())
                                                    .path +
                                                "/" +
                                                args[0].split("/").last;
                                        print("open");
                                        await OpenFile.open(dir +
                                            "/" +
                                            args[0].split("/").last);

                                        print("down");
                                        return "ok";
                                      });
                                },
                              ),
                      ),
              ),
      ),
    );
  }
}
