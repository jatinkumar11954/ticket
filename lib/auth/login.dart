import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:happiticket/static/SizeConfig.dart';
import 'package:happiticket/static/apiServices.dart';
import 'package:happiticket/static/constants.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:shimmer/shimmer.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

import '../main.dart';

class Login extends StatefulWidget {
  Login({Key key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool showPwd = true;
  Icon _icon = Icon(
    Icons.visibility,
  );
  void _toggle() {
    setState(() {
      showPwd = !showPwd;
      if (showPwd) {
        _icon = Icon(
          Icons.visibility,
        );
      } else {
        _icon = Icon(Icons.visibility_off, color: Colors.grey);
      }
    });
  }

  showLoading() => setState(() {
        _isLoading = true;
      });
  stopLoading() => setState(() {
        _isLoading = false;
      });
  @override
  void dispose() {
    super.dispose();
    // phoneNo.clear();clear
    phoneNo.dispose();
    password.dispose();
  }
 String firebaseToken;

  TextEditingController phoneNo = TextEditingController();
  TextEditingController password = TextEditingController();
  bool _isLoading = false;
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            height: 200,
            color: Color.fromRGBO(239, 142, 47, 1),
            child: Align(
              alignment: Alignment.bottomLeft,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  "Login",
                  style: TextStyle(
                      decoration: TextDecoration.underline,
                      decorationThickness: 2,
                      color: Colors.white,
                      fontSize: 25,
                      fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ),
          Container(
            alignment: Alignment.topCenter,
            padding: EdgeInsets.only(left: 15, right: 15, top: 10),
            width: SizeConfig.w * 0.93,
            child: TextFormField(
              maxLength: 10,
              keyboardType: TextInputType.number,
              controller: phoneNo,
              validator: (s) {
                if (s.isEmpty)
                  return "Please enter the Phone NUmber";
                else if (s.length < 10)
                  return "Please enter 10 digits";
                else
                  return null;
              },
              decoration: InputDecoration(
                labelText: "Mobile Number*",
                labelStyle: TextStyle(
                  color: Theme.of(context).primaryColor,
                ),
                helperText: "Enter your 10 digit Mobile Number",
                helperStyle: TextStyle(
                    color: Colors.black45, fontWeight: FontWeight.w400),
                focusedBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: Theme.of(context).primaryColor),
                ),
                enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(
                      color: Theme.of(context).textTheme.title.color),
                ),
              ),
              style: Theme.of(context).textTheme.headline5,
            ),
          ),
          Container(
            alignment: Alignment.topCenter,
            padding: EdgeInsets.only(left: 15, right: 15, top: 10),
            width: SizeConfig.w * 0.93,
            child: TextFormField(
              // maxLength: 10,
              keyboardType: TextInputType.number,
              controller: password,
              validator: (s) {
                if (s.isEmpty)
                  return "Please enter the password";
                else
                  return null;
              },
              obscureText: showPwd,

              decoration: InputDecoration(
                suffixIcon: IconButton(
                  icon: _icon,
                  onPressed: _toggle,
                ),
                labelText: "Enter Password",
                labelStyle: TextStyle(
                  color: Theme.of(context).primaryColor,
                ),

                // helperText: "Enter your 10 digit Mobile Number",
                helperStyle: TextStyle(
                    color: Colors.black45, fontWeight: FontWeight.w400),
                focusedBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: Theme.of(context).primaryColor),
                ),
                enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(
                      color: Theme.of(context).textTheme.title.color),
                ),
              ),
              style: Theme.of(context).textTheme.headline5,
            ),
          ),
          Center(
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
              ),
              margin: EdgeInsets.only(top: SizeConfig.h * 0.1),
              width: SizeConfig.w * 0.5,
              height: 40,
              child: _isLoading
                  ? Center(
                      child: CircularProgressIndicator(
                        backgroundColor: Theme.of(context).primaryColor,
                      ),
                    )
                  : RaisedButton(
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5)),
                      elevation: 0,
                      color: Theme.of(context).primaryColor,
                      onPressed: _isLoading
                          ? () {}
                          : () async {
                              FocusScope.of(context).unfocus();
                              if (phoneNo?.text.length == 10 &&
                                  phoneNo.text != null) {
                                showLoading();

                                // await Future.delayed(Duration(milliseconds: 500));
                                Map<String, dynamic> data = {
                                  "phone": phoneNo.text,
                                  "password": password.text
                                }; //update
                                print(data.toString());
                                // showLoading();

                                Map res = await ApiServices.postRequest(
                                    json.encode(data), loginEndPoint);
                                print("llllllllog${res}");
                                if (res != null) {
                                  print("res is not null ${res["status"]}");
                                  if (res["status"]) {
                                    print("status is true");
                                    stopLoading();
                                    SharedPreferences prefs =
                                        await SharedPreferences.getInstance();

                                    await prefs.setString(
                                        "userId", res["userId"]);
                                    FocusScope.of(context).unfocus();
                                      await FirebaseMessaging.instance .getToken() .then((String token) {
    // assert(token != null);
                                      firebaseToken = token;
                                    }).catchError((e) => print(e.toString()));
                                       FirebaseMessaging.instance.requestPermission();

                                    Map<String, dynamic> fcmData = {
                                      "id": res["userId"],
                                      "notificattionToken": firebaseToken
                                    };
                                    print(fcmData);
                                    Map fcmRes = await ApiServices.putRequest(
                                        json.encode(fcmData), fcmEndPoint);

//9100492944
                                    Navigator.pushReplacement(
                                        context,
                                        MaterialPageRoute(
                                            builder: (_) => InAppWebViewPage(
                                                userId: res["userId"],
                                                url:
                                                    webviewBase + webviewEnd)));
                                  } //status is true
                                  else {
                                    stopLoading();

                                    Fluttertoast.showToast(
                                      msg: res["message"],
                                      backgroundColor: Colors.grey[400],
                                      toastLength: Toast.LENGTH_LONG,
                                      gravity: ToastGravity.CENTER,
                                      timeInSecForIosWeb: 3,
                                    );
                                  } //status is not true
                                } //res is not null
                              } //phone number is empty
                              else {
                                Fluttertoast.showToast(
                                  msg: "Please enter your Phone Number",
                                  backgroundColor: Colors.grey[400],
                                  toastLength: Toast.LENGTH_LONG,
                                  gravity: ToastGravity.CENTER,
                                  timeInSecForIosWeb: 3,
                                );
                              }
                            },
                      child: FittedBox(
                        fit: BoxFit.fitWidth,
                        child: Text("Login",
                            style: Theme.of(context)
                                .textTheme
                                .headline6
                                .copyWith(fontSize: 17, color: Colors.white)),
                      ),
                    ),
            ),
          ),
        ],
      ),
    );
  }
}
