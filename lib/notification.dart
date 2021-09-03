import 'dart:async';
import 'package:flutter/services.dart';

import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:flutter_downloader/flutter_downloader.dart';

import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:happiticket/auth/login.dart';
import 'package:happiticket/drawer.dart';
import 'package:happiticket/static/constants.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

class NotificationScreen extends StatefulWidget {
  String userId;
  String url;
  NotificationScreen({this.userId, this.url});
  @override
  _NotificationScreenState createState() => new _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  bool load = false;
  InAppWebViewController webView;
  // final FirebaseMessaging _firebaseMessaging = FirebaseMessaging();
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: MainDrawer(),
      appBar: AppBar(
        centerTitle: true,
        iconTheme: IconThemeData(
          color: Colors.white, //change your color here
        ),
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
              : Container()
        ],
        backgroundColor: Color.fromRGBO(239, 142, 47, 1),
        title: FittedBox(
            fit: BoxFit.fitWidth,
            child: Text(
              "Happi Mobiles Tickets Management",
              style: TextStyle(color: Colors.white),
            )),
      ),
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
        child: SafeArea(
          child: widget.userId == ""
              ? Login()
              : Center(
                  child: InAppWebView(
                    // onDownloadStart: (controller, url) async {
                    //   print("onDownloadStart $url");
                    //   await Permission.storage.request();

                    //   final taskId = await FlutterDownloader.enqueue(
                    //     url: url,
                    //     savedDir: (await getExternalStorageDirectory()).path,
                    //     showNotification:
                    //         true, // show download progress in status bar (for Android)
                    //     openFileFromNotification:
                    //         true, // click on notification to open downloaded file (for Android)
                    //   );
                    // },
                    initialUrl: widget.url + widget.userId,
                    initialHeaders: {},
                    initialOptions: InAppWebViewGroupOptions(
                        crossPlatform: InAppWebViewOptions(
                      cacheEnabled: false,
                      debuggingEnabled: true,
                      // useOnDownloadStart: true
                    )),
                    onWebViewCreated: (InAppWebViewController controller) {
                      webView = controller;
                      controller.clearCache();
                      controller.addJavaScriptHandler(
                          handlerName: "PAYMENT_SUCCESS",
                          callback: (args) async {
                            // Here you receive all the arguments from the JavaScript side
                            // that is a List<dynamic>
                            print("From the JavaScript side:");
                            print(args[0]);
                            await Permission.storage.request();

                            if (await canLaunch(args[0])) {
                              await launch(
                                args[0],
                                forceSafariVC: true,
                                forceWebView: true,
                                headers: <String, String>{
                                  'my_header_key': 'my_header_value'
                                },
                              );
                            } else {
                              throw 'Could not launch $args[0]';
                            }
                          });
                    },
                    // onLoadStart: (InAppWebViewController controller, String url) {
                    //   setState(() {
                    //     this.iframeUrl = url;
                    //   });
                    // },
                    // onLoadStop: (InAppWebViewController controller, String url) async {
                    //   setState(() {
                    //     this.iframeUrl = url;
                    //   });
                    // },
                    // onProgressChanged: (InAppWebViewController controller, int progress) {
                    //   setState(() {
                    //     this.progress = progress / 100;
                    //   });
                    // },admin@123 9988776655
                  ),
                ),
        ),
      ),
    );
  }
}
