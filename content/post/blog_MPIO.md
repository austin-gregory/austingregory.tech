+++
author = "Austin Gregory"
title = "Setup MPIO with FreeNAS and XCP-NG (XenServer) - Guide"
date = "2021-08-28"
description = "Guide"
tags = [
    "XCP-NG","Xen","FreeNAS"
]
+++

Setup iSCSI multipathing for higher throughput and redundancy, In this guide I show the steps needed to setup MPIO using XenServer (XCP-ng) hosts and a FreeNAS storage server. I use round robin as the path selector to double iSCSi performance of my 4 disk array.
<!--more-->


## Prerequisites

-	Clean install of XCP-NG on 1+ host
-	FreeNAS server with base config for pool/disks
-	XCP-NG hosts and FreeNAS server must have 3+ NICs
-	XCP-ng Center installed (Windows GUI)



## 1. Configure IP interfaces 

I set Xen host management IPs directly from the console after install, then added them to XCP-ng center to configure storage interfaces. FreeNAS is configured using the web interface. 


- XEN-MASTER 
    - Management = 192.168.64.6
    - Storage1 = 10.0.0.6
    - Storage2 = 10.0.1.6
- XEN-HOST-01
    - Management = 192.168.64.9
    - Storage1 = 10.0.0.9
    - Storage = 10.0.1.9
- FreeNAS
    - Management = 192.168.64.5
    - Storage1 = 10.0.0.5
    - Storage2 = 10.0.1.5




## 2. FreeNAS iSCSI configuration

1. Add a zvol to your existing data set. This will be the total size of you storage repository presented to you hosts. Storage > Pools > Add Zvol.

![FreeNas Zvol](/images/freenas_zvol.png)

2. Set iSCSI for auto start, add an extra portal IP (10.0.0.5 & 10.0.1.5), add initiator, point target to portal IPs, and finally add the zvol to your extent.


## Enable Multipathing on each Xen host

1. Login via SSH or the console tab in XCP-ng center

2. Find the UUID using the following command
```bash
xe host-list
```
3. Enter maintenance mode and migrate VMs if you have any
```bash
xe host-disable uuid=<host_uuid>
xe host-evacuate uuid=<host_uuid>
```
4. Enable multipathing 
```bash
xe host-param-set other-config:multipathing=true uuid=<server_uuid>
```
5. Exit maintenance mode
```bash
xe host-enable uuid=<host_uuid>
```

## Configure iSCSI interfaces and add them to the bridged network 

1. Find the interface number of each storage NIC. Then create matching iSCSI interfaces using the following commands.

```bash
iscsiadm -m iface --op new -I c_iface2
iscsiadm -m iface --op new -I c_iface3
```
Example:

![Grep for IPs](/images/grep.png)

2. Bind each interface to the Xen bridge. 

```bash
iscsiadm -m iface --op update -I c_iface2 -n iface.net_ifacename -v xenbr2 
iscsiadm -m iface --op update -I c_iface3 -n iface.net_ifacename -v xenbr3
```

## Login in to the LUN and setup your config file on each host

1. Discover iSCSI targets using your portal IPs.
```bash
iscsiadm -m discovery -t st  -p 10.0.0.5
```
2. Log in to the LUN using your IQN.
```bash
iscsiadm -m discovery -t st  -p 10.0.0.5 iqn.2005-10.org.freenas.ctl:xen-target --login
```
3. Edit your config file in /etc/multipath.conf

Replace everything with this:

```bash
devices {
        device {
                vendor                  "FreeNAS"
                product                 "iSCSI Disk"
                path_checker            "tur"
                path_grouping_policy    multibus
                failback                immediate
                path_selector "round-robin 0"

        }
}

```
4. Reboot

## Test MPIO from a Windows server VM using CrystalDiskMark 

 Benchmark without MPIO


![Without MPIO](/images/withoutmpio.png)

 Benchmark with MPIO


![Without MPIO](/images/withmpio.png)