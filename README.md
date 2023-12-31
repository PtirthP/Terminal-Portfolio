## About

A dynamic portfolio with the appearance and functionality reminiscent of a terminal interface.

## Running Locally

Clone the project

```bash
git clone https://github.com/satnaing/terminal-portfolio.git
```

Go to the project directory

```bash
cd terminal-portfolio
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Running on IP (Accessing the Localhost Website on Other Devices in Your Network 📱💻) 

Follow these steps to run the application on your local network:

### Step 1: Start the Server

Open your terminal and run the following command:

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

### Step 2: Find Your Computer's Local IP Address
Run the following command in the terminal to find your computer's local IP address:

```bash
ipconfig
```

Look for the "IPv4 Address" under your active network connection. It will be something like 192.168.x.x.

### Step 3: Access the Website on Other Devices
On your mobile device or any other device connected to the same network, open a web browser and enter the following URL:

```bash
http://your-computers-local-ip:5173/
```

Replace "your-computers-local-ip" with the actual local IP address obtained in Step 2.

Now, you should be able to access the website from any device within your local network. ✅

## Author

- [@satnaing](https://satnaing.dev)
