# Mobile RNSuitmedia

Repositori untuk test development aplikasi mobile RNSuitmedia menggunakan React-Native CLI

Konfigurasi git :
1. git init
2. git remote add origin git@github.com:herdiiyan/RNSuitmedia.git
3. git checkout [branch]

Setup untuk running untuk android :
1. Setup react-native CLI environment seperti di website https://reactnative.dev/docs/environment-setup
2. Jalankan command npm install
3. Buat emulator di android studio
4. Jika sudah terinstall react-native-cli di device, jalankan command react-native run-android. Jika belum command npx react-native run-android.
5. Jika emulator tidak terbuka, Buka android studio, buka bagian AVD dan jalankan emulator yang tersedia, kemudian kembali ke step 4.

Setup untuk running untuk ios :
1. Setup react-native CLI environment seperti di website https://reactnative.dev/docs/environment-setup
2. Jalankan command npm install
3. Jalankan command cd ios
4. Jalankan command pod install
5. Jika sudah terinstall react-native-cli di device, jalankan command react-native run-ios. Jika belum command npx react-native run-ios.
6. Untuk dijalankan di specifik simulator yang tersedia, command nya react-native run-ios --simulator="iPhone 8"

Command untuk build release android :
1. Jalankan command react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
2. Jalankan command cd android
3. Untuk windows jalankan command gradlew assembleRelease, untuk unix jalankan command ./gradlew assembleRelease
4. Hasil release apk nya ada di path android/app/build/outputs/apk/release/[namaAplikasi].apk

# Terima Kasih



