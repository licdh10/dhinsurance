@echo off
cd /d "%~dp0"
echo [DH Site] Building production bundle...
"%~dp0tools\nodejs\node.exe" "%~dp0node_modules\vite\bin\vite.js" build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed.
    pause
    exit /b %errorlevel%
)
echo.
echo [DH Site] Deploying to Cloudflare Pages...
"%~dp0tools\nodejs\node.exe" "%~dp0node_modules\wrangler\bin\wrangler.js" pages deploy dist
pause
