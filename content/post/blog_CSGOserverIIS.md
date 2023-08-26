+++
author = "Austin Gregory"
title = "Host CSGO custom maps larger than 16MB"
date = "2023-04-30"
description = "Guide "
tags = [
    "IIS","Gaming","Windows Server"
]
+++


<!--more-->

### IIS Config file

```bash
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
 
  <system.webServer>
    <security>
      <authorization>
        <!-- Deny all users access to the root of the website, since it
             contains this web.config -->
        <remove users="*" roles="" verbs="" />
        <add accessType="Deny" users="*" />
      </authorization>
    </security>
        <directoryBrowse enabled="true" />
        <staticContent>
            <mimeMap fileExtension=".bsp" mimeType="application/octet-stream" />
        </staticContent>
  </system.webServer>
 
  <location path="Public" allowOverride="false">
    <system.webServer>
      <directoryBrowse enabled="true" showFlags="Date, Time, Size, Extension" />
      <defaultDocument>
        <files>
          <!-- When requesting a file listing, don't serve up the default 
               index.html file if it exists. -->
          <clear />
        </files>
      </defaultDocument>
 
      <security>
        <authorization>
          <!-- Allow all users access to the Public folder -->
          <remove users="*" roles="" verbs="" />
          <add accessType="Allow" users="*" roles="" />
        </authorization>
 
        <!-- Unblock all sourcecode related extensions (.cs, .aspx, .mdf)
             and files/folders (web.config, \bin) -->
        <requestFiltering>
          <hiddenSegments>
            <clear />
          </hiddenSegments>
          <fileExtensions>
            <clear />
          </fileExtensions>
        </requestFiltering>
      </security>
 
      <!-- Remove all ASP.NET file extension associations.
           Only include this if you have the ASP.NET feature installed, 
           otherwise this produces an Invalid configuration error. -->
      <handlers>
     
      </handlers>
 
      <!-- Map all extensions to the same MIME type, so all files can be
           downloaded. -->
      <staticContent>
        <clear />
        <mimeMap fileExtension="*" mimeType="application/octet-stream" />
      </staticContent>
    </system.webServer>
  </location>
 
</configuration>

```





Open C:\Windows\System32\inetsrv\config\applicationHost.config and add the allowSubDirConfig="false"

### Example
```bash
<site name="csmaps" id="2" serverAutoStart="true">
                <application path="/" applicationPool="csmaps">
                    <virtualDirectory path="/" physicalPath="C:\inetpub\wwwroot\csmaps" allowSubDirConfig="false" />
```




```bash
sv_downloadurl "http://IP or SITE DOMAIN/csmaps/"
sv_allowdownload "1"
hostname "NAME OF YOUR SERVER"
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




