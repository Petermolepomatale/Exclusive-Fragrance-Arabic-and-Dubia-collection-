@echo off
echo ========================================
echo  Arabic & Dubia Collection - GitHub Push
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Petermolepomatale/Exclusive-Fragrance-Arabic-and-Dubia-collection-.git

echo.
echo Step 3: Adding all files...
git add .

echo.
echo Step 4: Creating commit...
git commit -m "Arabic & Dubia perfume collection website - Full implementation"

echo.
echo Step 5: Pushing to GitHub...
echo.
echo NOTE: You may be asked to login to GitHub
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo Push to 'main' failed, trying 'master' branch...
    git push -u origin master
)

echo.
echo ========================================
echo  Done! Check your GitHub repository
echo ========================================
echo.
pause
