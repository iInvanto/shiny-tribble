# shiny-tribble
Explore the magic of reverse proxy and port forwarding with this React-Express mono repo. Dive into seamless frontend-backend communication, perfect for learning and experimenting with modern web development techniques.

# Proxy using package.json
To proxy requests in a React application using the `package.json` file, you can utilize the `proxy` field. This field allows you to specify a backend server URL to which all requests from your React app will be forwarded during development.

Here's how you can set it up:

1. **Add a `proxy` field in your `package.json`**:

```json
{
  "name": "your-react-app",
  "version": "1.0.0",
  "proxy": "http://localhost:5000", // Replace this URL with your backend server URL
  "scripts": {
    "start": "react-scripts start",
  },
  ...
}
```

In the above example, all requests from your React app during development will be forwarded to `http://localhost:5000`, assuming your backend server is running on that port.

2. **Run your React app**:

```bash
npm start
```

Now, whenever your React app makes a request to an endpoint like `/api/data`, for example, it will be forwarded to `http://localhost:5000/api/data` by the development server.

Remember to replace `http://localhost:5000` with the actual URL of your backend server.

This method is convenient for development purposes as it allows you to avoid CORS issues during local development without needing to configure a reverse proxy server explicitly. However, keep in mind that this approach only works during development, and you'll need to handle CORS and proxying differently in production environments.

# Proxy using nginx
The changes you need to make in your React frontend, Node.js backend, and Nginx configuration for setting up a reverse proxy. We'll also cover how to configure Nginx on Windows.

**React Frontend**:
1. In your React frontend, you don't need to make any changes to the code. The reverse proxy configuration will handle routing requests to the backend.
2. Ensure your React app is running on a specific port (e.g., 3000) during development.

**Node.js Backend**:
1. Ensure your Express.js backend is configured to listen on a specific port (e.g., 5010).
2. You don't need to change any code in your backend to accommodate the reverse proxy setup.

**Nginx Configuration**:
1. Create a new configuration file for your reverse proxy setup in Nginx.
2. Define server blocks for each of your frontend and backend applications.
3. Use the `proxy_pass` directive to forward requests to the respective backend URL.

Here's an example Nginx configuration (`nginx.conf`) for Windows:

```nginx
...

http {
    server {
        listen       80;
        server_name  localhost;

        location / {
            # Forward requests to your React frontend (Assuming it's running on port 3000)
            proxy_pass http://localhost:3000;
        }

        location /api {
            # Forward requests to your Express.js backend (Assuming it's running on port 5010)
            proxy_pass http://localhost:5010;
        }
    }
    ...
}

...
```

To configure Nginx on Windows:
1. Download the Nginx installer for Windows from the Nginx website.
2. Run the installer and follow the installation instructions. By default, Nginx will be installed in `C:\nginx`.
3. Once installed, navigate to the Nginx installation directory (`C:\nginx`) and locate the `conf` folder.
4. Edit the `nginx.conf` file using a text editor and add your reverse proxy configuration.
5. Save the `nginx.conf` file.
6. Open Command Prompt as Administrator and navigate to the Nginx installation directory (`C:\nginx`).
7. Test the Nginx configuration:

    ```bash
    nginx -t
    ```

8. If the configuration test is successful, start the Nginx service:

    ```bash
    nginx
    ```

Now, Nginx is acting as a reverse proxy server on your Windows machine, forwarding requests to your React frontend and Node.js backend applications. You can access your applications through `http://localhost`. Make sure your React app and Node.js backend are running while testing this setup.
