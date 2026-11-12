@echo off
cd /d "%~dp0"
"%~dp0tools\nodejs\node.exe" "%~dp0node_modules\wrangler\bin\wrangler.js" %*
