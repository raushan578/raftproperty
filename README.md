🏡 RaftProperty
A cross-platform React Native (Expo) project built to explore property listing features using modern state management. This project uses Jotai for state handling and is preloaded with dummy data for a seamless experience during development and testing.

⚠️ Note: Instead of fetching from a local JSON server (which doesn't work when sharing the APK), the app currently uses dummy data. This ensures the app remains functional in all environments, including distributed APKs.

📦 Features
Built with Expo for easy development and deployment.

Uses Jotai for simple and atomic state management.

Property data mocked for testing without backend dependencies.

Designed for scalability and easy integration with APIs in future.

🚀 Getting Started
1. Clone the Repository

git clone https://github.com/your-username/RaftProperty.git
cd RaftProperty

2. Install Dependencies
Make sure you have node, npm or yarn, and expo-cli installed.

npm install

# or
yarn install
3. Start the Development Server

npx expo start

Scan the QR code using the Expo Go app on your Android/iOS device.

📱 Building APK for Android
To generate an APK for testing or sharing:
npx expo export --platform android

🧪 Notes
JSON Server is commonly used for local REST APIs in development. However, since it doesn't work in APKs or shared builds, this app uses static dummy data instead.

You can easily switch to live APIs or a local JSON server during development if needed.

🤝 Contributing
Feel free to fork, improve or file issues. Contributions are welcome!

📄 License
MIT License © Raushan Raj

