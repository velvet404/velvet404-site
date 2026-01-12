Add-Type -AssemblyName System.Drawing

$inputPath = Join-Path $PSScriptRoot "..\public\og-image.png"
$outputPath = Join-Path $PSScriptRoot "..\public\og-image-optimized.jpg"
$targetWidth = 1200
$targetHeight = 630
$quality = 80

Write-Host "Processing $inputPath..."

if (-not (Test-Path $inputPath)) {
    Write-Error "Input file not found: $inputPath"
    exit 1
}

$srcImage = [System.Drawing.Bitmap]::FromFile($inputPath)

# Calculate dimensions
$scale = $targetWidth / $srcImage.Width
$resizeHeight = [int]($srcImage.Height * $scale)

Write-Host "Resizing to ${targetWidth}x${resizeHeight}..."

$resizedImage = new-object System.Drawing.Bitmap $targetWidth, $resizeHeight
$graphics = [System.Drawing.Graphics]::FromImage($resizedImage)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.DrawImage($srcImage, 0, 0, $targetWidth, $resizeHeight)
$graphics.Dispose()

# Create final canvas
$finalImage = new-object System.Drawing.Bitmap $targetWidth, $targetHeight
$graphicsFinal = [System.Drawing.Graphics]::FromImage($finalImage)
$graphicsFinal.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphicsFinal.Clear([System.Drawing.Color]::White) # Fill background for JPEG

# Center Crop
$y = ($resizeHeight - $targetHeight) / 2
$srcRect = New-Object System.Drawing.Rectangle 0, $y, $targetWidth, $targetHeight
$destRect = New-Object System.Drawing.Rectangle 0, 0, $targetWidth, $targetHeight

Write-Host "Cropping center region..."
$graphicsFinal.DrawImage($resizedImage, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$graphicsFinal.Dispose()
$resizedImage.Dispose()
$srcImage.Dispose()

# Save as JPEG
Write-Host "Saving to $outputPath with Quality $quality..."
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $quality)

$finalImage.Save($outputPath, $codec, $encoderParams)
$finalImage.Dispose()

Write-Host "Done."
