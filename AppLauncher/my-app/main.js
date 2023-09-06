const { shell } = require('electron')

  // Code:Blocks JS 

  const launchButton = document.getElementById('codeBlocks')
  launchButton.addEventListener('click', () => {
    shell.openItem('C:\\Program Files\\CodeBlocks\\codeblocks.exe')
  })

// Virtual Box Script 

  const launchButton1 = document.getElementById('virtualBox')
  launchButton1.addEventListener('click', () => {
    shell.openItem('C:\\Program Files\\Oracle\\VirtualBox\\VirtualBox.exe')
  })


  // Virtual Box Script 

  const launchButton2 = document.getElementById('vsCode')
  launchButton2.addEventListener('click', () => {
    shell.openItem('"C:\\Users\\John Deadman\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"')
  })


    // Powershell Script 

    const launchButton3 = document.getElementById('powerShell')
    launchButton3.addEventListener('click', () => {
      shell.openItem('"C:\\Users\\John Deadman\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Windows PowerShell\\Windows PowerShell.lnk"')
    })



