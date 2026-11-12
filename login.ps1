Set-Location $PSScriptRoot
Write-Host "[DH Site] Launching Cloudflare Wrangler Login..." -ForegroundColor Cyan
& "$PSScriptRoot\tools\nodejs\node.exe" "$PSScriptRoot\node_modules\wrangler\bin\wrangler.js" login
