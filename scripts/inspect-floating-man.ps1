Add-Type -AssemblyName System.Drawing
$path = 'C:\Users\VivianBodenlosz\Documents\Project\Webpage\public\images\floating-man.png'
$img = [System.Drawing.Bitmap]::FromFile($path)
Write-Host ("Size: {0}x{1}" -f $img.Width, $img.Height)

# Sample column at x=850 (deep inside the polo / pants area)
# Walk DOWN the image, looking for color transition from navy polo to dark pants.
$col = 850
Write-Host ("Column x={0}, y from 600 to {1}:" -f $col, ($img.Height - 1))
for ($y = 600; $y -lt $img.Height; $y += 10) {
    $px = $img.GetPixel($col, $y)
    Write-Host ("  y={0}  R={1} G={2} B={3} A={4}" -f $y, $px.R, $px.G, $px.B, $px.A)
}

# Also probe a few more columns to find the polo bottom hem consistently
foreach ($cx in 700, 800, 900, 950) {
    Write-Host ("--- column x=$cx ---")
    for ($y = 700; $y -lt $img.Height; $y += 5) {
        $px = $img.GetPixel($cx, $y)
        Write-Host ("  y={0}  R={1} G={2} B={3} A={4}" -f $y, $px.R, $px.G, $px.B, $px.A)
    }
}

$img.Dispose()
