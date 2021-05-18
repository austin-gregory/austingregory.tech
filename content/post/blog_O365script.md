+++
author = "Austin Gregory"
title = "O365 Admin - User deactivation script"
date = "2021-05-16"
description = "Guide "
tags = [
    "Office 365","Scripts","Powershell"
]
+++

A Powershell script for user deactivation. A quick alternative to suing the O365 admin center.
<!--more-->

### What it does

- Converts the user to a shared mailbox
- Removes licenses
- Sets email forwarding or delegates mailbox permissions 

```bash
$UserCredential = Get-Credential
Connect-MsolService -Credential $UserCredential

$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection
Import-PSSession $Session -DisableNameChecking

$Deactivate = Read-Host "Which user would you like to deactivate?"
$upn = $Deactivate
(get-MsolUser -UserPrincipalName $upn).licenses.AccountSkuId |
foreach{
    Set-MsolUserLicense -UserPrincipalName $upn -RemoveLicenses $_
}
Set-Mailbox -Identity $Deactivate -Type:Shared

$msg = 'Would you like to set a forwarding address ( y / n )?'
do {
    $response = Read-Host -Prompt $msg
    if ($response -eq 'y') {
        $Forward = Read-Host "Enter the email address."
        Set-Mailbox $Deactivate -ForwardingAddress $Forward

    }
} until ($response -eq 'n'-or $response -eq 'y')

$msg = 'Would you like to set mailbox permissions ( y / n )?'
do {
    $response = Read-Host -Prompt $msg
    if ($response -eq 'y'-or $strQuit -eq 'y') {
        $FullAccess = Read-Host "Enter the email address of the user you wish to give full access to"
        Add-MailboxPermission -Identity $Deactivate -User $FullAccess -AccessRights FullAccess -InheritanceType All
        $strQuit = Read-Host "Would you like to add more permissions?( y / n )"
    }
} until ($strQuit -eq "n"-or $response -eq 'n')
```



{{< math.inline >}}
{{ if or .Page.Params.math .Site.Params.math }}
<!-- KaTeX -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
{{ end }}
{{</ math.inline >}}

### How to use

1. Copy code to a text fiel and save with .ps1 extension
2. Install Powershell Module and set Execution Policy (Set-ExecutionPolicy RemoteSigned,
Install-Module MSOnline, Import-Module Msonline)
3. Execute .ps1 file from powershell
4. Enter O365 global admin credetials when prompted 


