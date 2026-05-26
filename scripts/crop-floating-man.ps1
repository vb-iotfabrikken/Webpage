# Crop the floating-man PNG just below the polo hem.
# Source measurement (see inspect-floating-man.ps1): the polo→pants
# transition sits around y ≈ 820–835 (depending on column). We crop at
# y = 836 so the bottom edge of the visible image lands just below the
# polo, removing the thin black pants sliver underneath.

Add-Type -AssemblyName System.Drawing
$src = 'C:\Users\VivianBodenlosz\Documents\Project\Webpage\public\images\floating-man.png'
$dst = $src
$cropHeight = 836

# Load the source.
$srcImg = [System.Drawing.Bitmap]::new($src)
Write-Host ("Source size: {0} x {1}" -f $srcImg.Width, $srcImg.Height)

# Build a new bitmap of the cropped dimensions and copy the top portion
# pixel-for-pixel, preserving the alpha channel.
$dstImg = New-Object System.Drawing.Bitmap $srcImg.Width, $cropHeight, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dstImg)
$g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
$srcRect = New-Object System.Drawing.Rectangle 0, 0, $srcImg.Width, $cropHeight
$dstRect = New-Object System.Drawing.Rectangle 0, 0, $srcImg.Width, $cropHeight
$g.DrawImage($srcImg, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$srcImg.Dispose()

# Save as PNG (preserves alpha).
$dstImg.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$dstImg.Dispose()

Write-Host ("Wrote: {0} ({1}x{2})" -f $dst, 1024, $cropHeight)
