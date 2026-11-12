@echo off
cd /d "%~dp0"
echo [DH Site] Launching Cloudflare Wrangler Login...
"%~dp0tools\nodejs\node.exe" "%~dp0node_modules\wrangler\bin\wrangler.js" login
pause
