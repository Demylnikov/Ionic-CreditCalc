## This is basic mortgage and financing calculator created using [Ionic Framework](https://ionicframework.com/)
### How to get started with this project

**Prerequisites:**
You need to have [Node.js](https://nodejs.org) installed on your machine.

1. Clone this repository to wherever you like
2. Open command line and change to the directory where you cloned the project
3. Install Ionic framework by executing
```bash
$ sudo npm install -g ionic cordova
```
4. After Ionic has been installed, execute
```bash
$ ionic serve
```
You should see a following message:
```bash
Looks like a fresh checkout! No ./node_modules directory found. Would you like to install project dependencies?
```
5. Enter "yes" or "y", wait for dependencies to be installed. You might get messages about available updates for local plugins, update them if you wish.
6. The app should launch in a default browser.

All important code is in **src** folder, the generated web app will be in **www** folder.

**If you want a hybrid app aswell**
1. Open command line and navigate to the project's folder
2. Execute
```bash
$ ionic cordova platform add android
$ ionic cordova platform add ios
```
It is up to you to decide which platforms you want.
3. To run the app on an emulator or a connected physical device execute
```bash
$ ionic cordova run android
```
Be aware that you need JDK, Android SDK and defined PATH variables for this to work. Similar applies to iOS.

### Web app with material design
![Web app](/appimgs/Web.png)

### Hybrid Android app with material design
![Hybrid app](/appimgs/Hybrid.png)

