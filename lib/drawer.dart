import 'package:android_intent/android_intent.dart';
import 'package:device_apps/device_apps.dart';
import 'package:external_app_launcher/external_app_launcher.dart';
import 'package:flutter/material.dart';
import 'package:happiticket/auth/login.dart';
import 'package:url_launcher/url_launcher.dart';

class MainDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Logout AlertDialog Start Here
    void _showDialog() {
      // flutter defined function
      showDialog(
        context: context,
        builder: (BuildContext context) {
          // return object of type Dialog
          return AlertDialog(
            title: Text(
              "Confirm",
              style: TextStyle(
                fontWeight: FontWeight.bold,
              ),
            ),
            content: Text("Are you Sure you want to Logout?"),
            actions: <Widget>[
              // usually buttons at the bottom of the dialog
              TextButton(
                child: Text(
                  "Close",
                  style: TextStyle(
                    color: Theme.of(context).primaryColor,
                  ),
                ),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),

              TextButton(
                child: Text(
                  "Logout",
                  style: TextStyle(
                    color: Theme.of(context).primaryColor,
                  ),
                ),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => Login()),
                  );
                },
              ),
            ],
          );
        },
      );
    }
    // Logout AlertDialog Ends Here

    return Drawer(
      child: SafeArea(
        child: ListView(
          children: <Widget>[
            Container(
              height: 100.0,
              decoration: BoxDecoration(
                color: Colors.yellow[900],
                image: DecorationImage(
                  image: AssetImage(
                    'assets/happiLogo.png',
                  ),
                ),
              ),
            ),
            InkWell(
              child: Container(
                padding: EdgeInsets.only(top: 10.0, bottom: 7.0, left: 15.0),
                child: Row(
                  children: <Widget>[
                    Image.asset(
                      'assets/hdm.png',
                      width: 30,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'Happi Discount Manager',
                      style: TextStyle(
                        color: Colors.grey[700],
                        fontSize: 15.0,
                      ),
                    ),
                  ],
                ),
              ),
              onTap: () {
                _openJioSavaan("com.hm.happi", null);
              },
            ),
            InkWell(
              child: Container(
                padding: EdgeInsets.only(top: 10.0, bottom: 7.0, left: 15.0),
                child: Row(
                  children: <Widget>[
                    Image.asset(
                      'assets/emp.png',
                      width: 30,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'Happi Employee',
                      style: TextStyle(
                        color: Colors.grey[700],
                        fontSize: 15.0,
                      ),
                    ),
                  ],
                ),
              ),
              onTap: () {
                _openJioSavaan("com.hm.happimobiles", null);
              },
            ),
            InkWell(
              child: Container(
                padding: EdgeInsets.only(top: 7.0, bottom: 7.0, left: 15.0),
                child: Row(
                  children: <Widget>[
                    Image.asset(
                      'assets/ecom.png',
                      width: 30,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'Happi ECOM',
                      style: TextStyle(
                        color: Colors.grey[700],
                        fontSize: 15.0,
                      ),
                    ),
                  ],
                ),
              ),
              onTap: () {
                _openJioSavaan("com.happimobiles",
                    "https://apps.apple.com/in/app/happi-mobiles/id1520143042");
              },
            ),
            InkWell(
              child: Container(
                padding: EdgeInsets.only(top: 7.0, bottom: 7.0, left: 15.0),
                child: Row(
                  children: <Widget>[
                    Image.asset(
                      'assets/ecom.png',
                      width: 30,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'Zoho',
                      style: TextStyle(
                        color: Colors.grey[700],
                        fontSize: 15.0,
                      ),
                    ),
                  ],
                ),
              ),
              onTap: () {
                _openJioSavaan("com.zoho.projects",
                    "https://apps.apple.com/in/app/zoho-projects/id511887920");
              },
            ),
            InkWell(
              child: Container(
                padding: EdgeInsets.only(top: 7.0, bottom: 7.0, left: 15.0),
                child: Row(
                  children: <Widget>[
                    Image.asset(
                      'assets/ecom.png',
                      width: 30,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'Adrenalin MAX',
                      style: TextStyle(
                        color: Colors.grey[700],
                        fontSize: 15.0,
                      ),
                    ),
                  ],
                ),
              ),
              onTap: () {
                _openJioSavaan("com.aes.hrms",
                    "https://apps.apple.com/in/app/adrenalin-max/id1500723779");
              },
            ),
            // InkWell(
            //   child: Container(
            //     padding: EdgeInsets.only(top: 7.0, bottom: 7.0, left: 15.0),
            //     child: Text(
            //       'Logout',
            //       style: TextStyle(
            //         color: Colors.grey[700],
            //         fontSize: 15.0,
            //       ),
            //     ),
            //   ),
            //   onTap: () {
            //     _showDialog();
            //   },
            // ),
            SizedBox(
              height: 10.0,
            ),
          ],
        ),
      ),
    );
  }

  _openJioSavaan(data, iosLink) async {
    await LaunchApp.openApp(
        androidPackageName: '${data}',
        iosUrlScheme: 'pulsesecure://',
        appStoreLink: iosLink ?? "",
        // 'itms-apps://itunes.apple.com/us/app/pulse-secure/id945832041',
        openStore: true);
  }
  // bool isInstalled = await DeviceApps.isAppInstalled('${data}');
  // if (isInstalled != false)
  // {
  //   AndroidIntent intent = AndroidIntent(
  //       action: 'action_view',
  //
  //   );
  //   await intent.launch();
  // }
  // else
  // {
  //   String url = data;
  //   if (await canLaunch(url))
  //     await launch(url);
  //   else
  //     throw 'Could not launch $url';
  // }
  // }
}
