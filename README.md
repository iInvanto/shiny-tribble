# shiny-tribble
Explore the magic of reverse proxy and port forwarding with this React-Express mono repo. Dive into seamless frontend-backend communication, perfect for learning and experimenting with modern web development techniques.


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
