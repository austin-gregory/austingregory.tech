+++
author = "Austin Gregory"
title = "Remote software removal with Powershell & Group Policy"
date = "2021-08-28"
description = "Guide"
tags = [
    "Windows Server","GPO","Powershell"
]
+++

The article covers a way to remotely remove software in a domain environment. This solution allows you to remove software that was not published/installed by the Group Policy. You can also use this as a method to remove deployed software on endpoints that use a VPN client to connect to you domain controller. 
This option addresses the issue caused by the client not having connectivity to the domain controller during startup. Here we will use a powershell script that is executed by a scheduled task that we deploy via GPO. I also include output to a text file so we can track which computers the script has successful ran on.
<!--more-->


## Prerequisites

-	Windows Domain Setup
-	At least one computer/server joined to the domain




## Create the Powershell script

In this script we are calling WMI to list installed software and search for a string in the name field. The name is saved in a variable that we use to run the uninstall command. In this example I am uninstalling Advanced IP scanner and the EA app.
Once the script is created, save it somewhere on the network that the client computers accounts can reach (Note the the system account will be executed the script).



```bash
## Query WMI for installed App name and set a variable ##

$app1 = Get-WmiObject -Class Win32_Product | Where-Object { 
    $_.Name -match "Advanced IP Scanner" 
}

## Uninstall the app specified in the variable ##

$app1.Uninstall()

## Specify additional apps to uninstall ##

$app2 = Get-WmiObject -Class Win32_Product | Where-Object { 
    $_.Name -match "EA app" 
}

$app2.Uninstall()


## Send the computer name to a text file shared on your network ##

$hn = Hostname
$content = $hn
$content = "`r`n$content"
$filepath = "\\*Your Share*\ScriptReports\Report.txt"
$content | Out-File -FilePath $filepath -Encoding utf8 -Append
```


## Deploy a scheduled task via Group Policy

1. Set the task up to run using the system account.

![GPO Task 1](/images/GPO_Task1.PNG)

2. Set the triggers up so the task will only run once at creation time.

![GPO Task 2](/images/GPO_Task2.PNG)

3. Specify actions that will start powershell locally and execute the script from a network share.

![GPO Task 3](/images/GPO_Task3.PNG)

![GPO Task 4](/images/GPO_Task4.PNG)

Program Path: C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe

Arguments: -NoProfile -NoLogo -NonInteractive -ExecutionPolicy Bypass -File \\*Your Share*\uninstall.ps1



























