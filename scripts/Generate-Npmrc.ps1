# Load the .env file and read the NPM_TOKEN variable
$envFilePath = ".\.env"
if (-not (Test-Path $envFilePath)) {
    Write-Error ".env file not found!"
    exit 1
}

$envContent = Get-Content $envFilePath
$npmToken = $envContent | ForEach-Object {
    if ($_ -match "^NPM_TOKEN=(.+)$") {
        $matches[1]
    }
}

if (-not $npmToken) {
    Write-Error "NPM_TOKEN not found in .env file!"
    exit 1
}

# Generate the .npmrc file
$npmrcContent = "//registry.npmjs.org/:_authToken=$npmToken`n"
Set-Content -Path ".\.npmrc" -Value $npmrcContent

Write-Host ".npmrc file has been generated successfully."
