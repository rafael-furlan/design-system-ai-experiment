# Troubleshooting Localhost Connection

## Server Status

The Vite dev server should be running on **port 5173**.

## Access URLs

Try these URLs in your browser:
- `http://localhost:5173`
- `http://127.0.0.1:5173`

## Common Issues

### 1. Port Already in Use
If port 5173 is busy, Vite will automatically try the next available port. Check the terminal output for the actual port.

### 2. Server Not Running
Start the server:
```bash
npm run dev
```

### 3. Browser Cache
Clear your browser cache or try:
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Incognito/Private mode

### 4. Check Browser Console
Open Developer Tools (F12 or Cmd+Option+I) and check for JavaScript errors.

### 5. Firewall Issues
Make sure your firewall isn't blocking port 5173.

## Verify Server is Running

Check if the server is running:
```bash
lsof -i :5173
```

Or check the process:
```bash
ps aux | grep vite
```

## Restart Server

If you need to restart:
```bash
# Kill existing server
pkill -f vite

# Start fresh
npm run dev
```

## Check Logs

The terminal where you ran `npm run dev` will show:
- Server URL
- Any compilation errors
- HMR (Hot Module Replacement) status
