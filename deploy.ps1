Set-Location $PSScriptRoot
Write-Host "[DH Site] Building production bundle with Vite..." -ForegroundColor Cyan
& "$PSScriptRoot\tools\nodejs\node.exe" "$PSScriptRoot\node_modules\vite\bin\vite.js" build
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[DH Site] Deploying to Cloudflare Pages..." -ForegroundColor Green
    & "$PSScriptRoot\tools\nodejs\node.exe" "$PSScriptRoot\node_modules\wrangler\bin\wrangler.js" pages deploy dist
} else {
    Write-Host "[ERROR] Build failed." -ForegroundColor Red
}
