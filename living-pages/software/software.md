---
layout: article.html
title: Software
description: An attempt to collate the software I use and why.
---

<style>
details {
    /* margin-top: -10px; */
    /* margin-bottom: 10px; */
    summary {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }
}
.intro_note {
    li {
        font-size: 15px;
        /* font-style: italic */
    }    
}
</style>

A list of the software I use and why. Generally the higher up something is in a category, the more I use it. I've also tried to list the supported platforms - I prefer software which is crossplatform.

<details class="intro_note">
<summary style="font-weight: initial">Note on supported platforms</summary>
<ul>
    <li>"Google Android" means that something is only (officially) available on Android devices with Google Play Services installed.</li>
    <li>"Web" means that something is available as a web app which works well on all modern browsers and all common form factors.</li>
    <!-- <li>"All" means that something is available on at least Android, iOS, Windows, macOS and Linux desktop.</li> -->
</ul>
</details>

%contents%

## General

### Operating system

{% details "Linux" %}

I use Linux on my laptop and desktop. I'm currently using Fedora KDE Plasma Desktop, as I find it has a good balance between stability and up-to-date software. I've previously used KDE Neon, OpenSUSE Tumbleweed, and PopOS as well.

{% enddetails %}

{% details "Android" %}

I use Android on my main phone. Currently this is the default Google Pixel ROM, although I'm interested in trying degoogled Android at some point, and I would like to find out more about (desktop) Linux-based phones.

{% enddetails %}

{% details "iOS" %}

I use an iPhone as a second phone. This is partially for development and testing purposes, such as websites I'm working on, or for the volunteering I do at Open Web Advocacy, and partially out of interest, as I like to be familiar with both ends of the mobile OS duopoly.

{% enddetails %}

{% details "Other" %}

I dual boot Windows on both my laptop and desktop. As with iOS, this is mainly for development, testing and familiarity, although occasionally I need to use something which isn't available on Linux.

I also have an old Chromebook I sometimes use for testing (mostly because it's *very* slow), or if I need a second laptop for some reason (such as calling somebody in while also taking notes in a meeting).

I've only briefly used macOS on family/friend's devices, but don't like it much.

I've never used any BSD-based OS, nor KaiOS, although I would like to try both.

{% enddetails %}

### Browser

{% details "Firefox" %}

I started using Firefox in 2017, and there's a lot of things I really like about it. It's fully free/open-source, has long had a great community around it, and generally has a good, if not perfect, approach to privacy and ethics. Its marketshare is quite low now, but it remains the only browser engine in use other than Blink (Chromium) and WebKit, and I believe that maintaining that diversity is important.

There's also some specific things I like about using it. The out of the box installation works very well on Linux/Wayland, quite a lot better than Chromium and WebKit-based browsers (especially with touchpad support). I'm a big fan of the highly customisable toolbar on desktop, which is also very lightweight, and the browser's start-up time is very quick.

But there's also issues. Gecko's marketshare keeps falling, the engine gets further behind Blink, and website support for it worsens. I wish this weren't the case, and I hope that increasing anti-trust [regulation (such as DMA and similar laws) and enforcement](https://open-web-advocacy.org) changes this, but it's currently unclear if Firefox has a future or not.

It also needs mentioning that not all of these problems are out of Mozilla's control. They could and should've made more noise about the anti-competitive practices of Apple, Microsoft and Google sooner, and management are sometimes not great at prioritising things - mobile and PWAs have been noticeably underinvested in.

{% enddetails %}

{% details "Vivaldi" %}

*I use Vivaldi for all PWAs due to Firefox's poor support for them, I wrote more about this [here](https://social.vivaldi.net/@FormularSumo/116137409500501635).*

I've been using Vivaldi a lot recently, and there's many good things about it. The team behind it are great, they really care about the web in general and about their users. The browser is super customisable and has loads of features. The business model seems to be sustainable and relatively enshittification-proof, which is unusual in tech at the moment. They do a lot of great regulatory work around [browser and web app competition](https://vivaldi.com/blog/browser-choice-alliance-launch/), and they're also based in Europe which is fairly unique and good in our current global environment.

Vivaldi is Chromium-based (with a default Chrome user-agent), which is both a pro and a con. Great website performance, functionality and compatibility, but not good for engine diversity. The team at Vivaldi does not have the technical expertise nor the resources to [work on the browser engine](https://chrome-commit-tracker.arthursonzogni.com/organizations/commits?repositories=chromium&organizations=Brave,Vivaldi&grouping=yearly&colors=organizations&kind=author&metric=commit&chart=bar&dates=2000-01-01,2025-04-02), meaning they're mostly at the whim of what the Chromium project (owned and majority run/funded by Google) decide. They also follow Chromium extended stable releases, moving to a new major release every 8 weeks instead of the usual 4 (soon to be 2), and Vivaldi itself is closed-sourced, as is its bug tracker.

The two main issues I have using Vivaldi are the UI and the lack of extensions on Android. The UI is very powerful, but quite different to other browsers, and not as intuitive in my experience - it's taken me awhile to adapt to it. The lack of extensions is common on Android Chromium browsers because Google have been refusing to implement this in Chrome for a long time (don't want people installing ad blockers and/or leaving the Google Play ecosystem!), so it's difficult for 3rd parties to get working, although a few have.

{% enddetails %}

{% details "Others" %}

I use a variety of other browsers for testing, or otherwise being familiar with. [I'm forced to use Safari's WebKit on iOS](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/), so I get to experience that a fair bit more than I'd like to, and I test things I make on it often, being the other major browser engine. I use Gnome Web occasionally on Linux if I want a WebKit browser, but I wouldn't recommend it as it's quite slow (the GTK folk have to re-do a lot of stuff as Apple only supports Safari on their platforms, relying heavily on the OS for a lot of things), and the browser UI is pretty basic, aside from being a worse engine than Blink and Gecko. I test on Chrome and Edge, being the other large browsers, and I use Chrome Canary/Beta and Firefox Nightly/Beta to try out new web platform and browser features.

{% enddetails %}

### App stores/distribution

{% details "Web apps" %}

Generally my preferred method of app distribution is through a Progressive Web App. Most of the apps I use on desktop are web apps (although I usually prefer to use them in the browser there rather than in standalone windows), and many of those I use on mobile are.

That being said, web apps will always lag slightly behind the bleeding edge of native apps functionality, and due to browsers' very strong sandboxing and interpreted environment, aren't appropriate for all types of apps (this is often known as the 80/20 capabilities or Jobs To Be Done split).

{% enddetails %}

{% details "Native apps" %}

For one-off needs I don't mind downloading native apps directly from someone's website, but for things I use regularly I prefer app stores/repositories as they make updates easier.

I love Linux's model of separating the app store front from the distribution channels - known as repositories. It's a great way of being able to manage installs and updates from one place while avoiding centralising control through one gatekeeper. On Linux I use Flatpaks a lot, and less frequently my OS's repositories and 3rd party ones that I add. I use the Synaptic package manager to help manage different repositories and find new ones I'm looking for.

On Android I use F-Droid quite a lot, it follows a similar model to Linux's, but only contains FOSS software. I use the Droidify client as I prefer the design to the official F-Droid one, and helpfully it already includes many 3rd party repositories which I make use of.

Aside from that, I use the Google Play Store and the Apple App Store when I need to, as many apps are only available from them on mobile. On iOS this is the only source of native apps I can use until my country's Competitions and Markets Authority (hopefully) gets round to forcing Apple to end some of its anti-competitive practices, as is currently happening in the EU and other jurisdictions.

{% enddetails %}

### Office

{% details "Google Workspace", "Desktop website, partially functional Google Android and iOS" %}

I started using Google Workspace (Drive, Docs, Sheets, Slides) in 2018 when my school introduced it. For the most part it works pretty well. I don't find there's many missing features, it's reliable, and largely crossplatform. I don't like that Google try to keep you using their document formats the same way Microsoft (mostly) used to with Office, I don't like that the web app doesn't work on mobile and that the mobile native apps are missing features, I don't like the way it preferences and is preferenced by other Google services (Chrome especially), and I don't like Google when it comes to data and privacy. But despite that, it's still the best collaborative editing software I'm aware of.

See also: [Microsoft Office is Still Bad (For Collaboration)](https://formularsumo.co.uk/blog/2025/microsoft-office-is-still-bad/)

{% enddetails %}

{% details "LibreOffice", "Windows, macOS, Linux, Android viewer. Also ports such as [Collabora Office](https://social.vivaldi.net/@FormularSumo/115367640736336577)" %}

Since 2024 or so I've been increasingly using LibreOffice. Mostly for taking a look at documents I've downloaded (I also use their Android viewer app for this), to quickly fill in a form to send off, or if I need better performance than Google Workspace for very large files. It works well - it's really fast, open-source, feature-rich, and has a lot of momentum building behind it, and I highly recommend as a drop-in Microsoft Office replacement. The UI isn't yet as polished as it could be, but it's been improving quickly. I wish more institutions in the UK like schools, universities and government bodies would take to using it and stop paying Microsoft's extortionate subscription fees, as has been happening recently in many other European countries.

{% enddetails %}

### Cloud storage/back-ups

{% details "Nextcloud Files", "Web, Windows, macOS, Linux, Android, iOS" %}

I started using Nextcloud in 2025, and I've been slowly moving my files over to it. I use tab.digital as my provider, a Dutch company who provide 8 GB free storage. It's open source, lets you choose where your data is stored (including self-hosting), integrates with loads of other programs such as Collabora office, and has a good Linux client. The web UI can be confusing, though is generally faster than Google Drive, and works much better on mobile and in splitscreen.

{% enddetails %}

{% details "Google Drive", "Desktop website, Windows, macOS, Android, iOS" %}

I switched from OneDrive to Google Drive in 2018 as I found that pretty much everything was better about it, as well as having 15 GB of free storage rather than 5. Although I've been moving to Nextcloud for my own files (see above), I still use Google Drive a lot as other people I know tend to store and share things from here, and because collaborative editing with Google Docs/Sheets/Slides is still better than anything else I've tried.

{% enddetails %}

### Maps

{% details "CoMaps", "Android, iOS, Linux" %}

Nowadays, I use CoMaps for most of my mapping needs. It's an offline-first, private, free and open-source (FOSS) app based on and contributing back to OpenStreetMaps (OSM) data, and is run by a transparent non-profit and a lovely community. It's incredibly lightweight, fast, and battery-efficient, and has really good walking and biking directions. It's also got a great map design - very aesthetically pleasing, while being super detailed, with things like benches, bins, toilets, bike storage, and metro entrances/paths.

The biggest drawback for me is the public transport. CoMaps only works with metro systems at the moment - there's no support for buses or heavy rail. Another important issue is the lack of live data. While offline-first is generally a good thing, it would be useful to be able to see eg live transport timetables, traffic, and temporary road closures. Along the same lines, I'd love an option to show photos and reviews from third-party sources, as this would be helpful when trying to decide *where* to go. It'd also be helpful to be able to sync saved locations between devices.

{% enddetails %}

{% details "Google Maps", "Google Android, iOS, semi-functional website" %}

Due to Google's massive size and monopolistic practices, Google Maps has the largest userbase and subsequently the most data of any mapping service. Especially in less busy areas, Google Maps often has points of interest which don't exist on OpenStreetMaps or other services, or has more data about them, such as opening hours or contact details. Google's all-encompasing data collection also means that it tends to have the best driving data - as driving is much more dependent on unpredictable live conditions such as traffic, accidents and road closures than other forms of transport. It does do some aspects of public transport well: fairly reliable live timetables, and occasionally showing realtime bus locations along with how busy they are.

Despite all of Google's data and resources, there are some serious problems with Google Maps. Privacy is of course a big one, as are the limited platforms it supports. A particularly important one for me though is active transport. It's no secret that [Google Maps is primarily designed for (Northamerican) drivers](https://social.vivaldi.net/@FormularSumo/116007219367832211). When walking or cycling, it frequently tries to send you down busy car routes, and the map design prioritises showing roads over all sorts of other information about a place. Offline maps only contain driving directions, and there's very limited info for points of interest when you don't have connection. The app is also very heavy to run, which is really noticeable on low-end devices. And I'm not a fan of Google's proprietary map database - I think maps should be open, public resources, and when I did used to contribute to Google Maps, many of my suggestions got rejected because the reviewers weren't able to "verify" them.

{% enddetails %}

{% details "Other" %}

I use the OpenStreetMaps (OSM) web app for a few purposes. As CoMaps only shows detailed information for areas which you have downloaded, I use OSM if I want to see that for different areas that I want to explore. It's useful if I want to see specific map view options, particularly the transport and cycling maps styles which are very useful. And I use it for detailed OpenStreetMaps editing. It doesn't do navigation, it's just a simple map, but it's good at being that.

I use Google Earth sometimes for its satellite imagery, as it's considerably better than other options. It also has very good 3D object modelling which can be quite useful.

I occasionally use the Apple Maps iOS app for its excellent public transport map view*, it's better than OpenStreetMaps, and far ahead of CoMaps (for the time being) and Google Maps. Otherwise I don't really use it unless I'm testing something out.

*The Apple Maps website doesn't have a public transport view, which is very sad.

I have briefly tried OSMAnd, but it's ridiculously slow, especially on Android, and charging for certain features is not up my street.

{% enddetails %}

### Notes

{% details "Cryptee", "Web" %}

{% enddetails %}

{% details "Google Keep", "Google Android, iOS, mostly-functional Web App" %}

{% enddetails %}

### Password Manager

{% details "Bitwarden" %}

{% enddetails %}

### Email

{% details "Thunderbird", "Android, iOS in testing, Windows, macOS, Linux" %}

{% enddetails %}

### Search Engine

{% details "Ecosia" %}

{% enddetails %}

### Video Conferencing

{% details "Jitsi Meet", "Web, optional Android and iOS"  %}

I have one key requirement for video calls/conferencing: to be able to send a link which anyone can click on and join, from any device with any modern browser, without having* to download an app. This is a suprisingly hard requirement to fill, and Jitsi meet is one of the few services which does it. It's also free, open-source, and really reliable.

\*Technically you *can* request the desktop for website for a lot of services, like Google Meet or Teams, but most people don't know to do that, and it usually doesn't work very well (tiny UI for a phone screen). Jitsi meet has pretty clear "download app or join in your browser" options, and the mobile browser UI is good.

{% enddetails %}

### Podcasts

{% details "Pocket Casts" %}

{% enddetails %}

### OS/disk flasher

{% details "balenaEtcher" %}

{% enddetails %}

{% details "Rufus" %}

{% enddetails %}

## Creative tools

### Image editor

{% details "Photopea", "Web" %}

{% enddetails %}

{% details "Others" %}

I used to use Paint.net (Windows) quite a lot, and I really liked it for raster editing. I began using Photopea more as I needed to do vector editing, and since switching to Linux I've stopped using Paint.net as it's Windows only :(

{% enddetails %}

### Video editor

{% details "Shotcut", "Windows, macOS, Linux" %}

I've been using Shotcut since 2022. It's very lightweight and fast, open-source, has a lot features, and supports all FFmpeg codecs. I find the UI to be a little dated, but it works well for what I use it for.

{% enddetails %}

{% details "Others" %}

I use DaVinchi Resolve (Windows, macOS, Linux) occasionally if I need features which Shotcut doesn't have. I also used to use Hitfilm Express a lot, although that was discontinued in 2025. I'm interested in trying Kdenlive (Windows, macOS, Linux) as well at some point.

{% enddetails %}

### Image converter

{% details "XL Converter", "Windows, macOS (experimental), Linux" %}

I previously used XnConvert, but I prefer the UI of XL Converter, and it's also open-source. I also used Imagine (Plus) for a bit.

{% enddetails %}

### Recording software

{% details "OBS Studio", "Windows, macOS, Linux" %}

{% enddetails %}

### Music notation

{% details "Musescore", "Windows, macOS, Linux" %}

{% enddetails %}

### Code editor

{% details "VSCodium", "Windows, macOS, Linux" %}

I've been using VSCode since 2017, and it works well for me. I switched to VSCodium in 2024, which is released under an open-source license, removes telemetry, and uses the Open VSX Marketplace instead of the Microsoft VSCode Marketplace.

{% enddetails %}

{% details "Other" %}

I've only dabbled with other editors. I use Kate for previewing files as it's faster than VSCodium. I used to use Android Studio for compiling Android apps, which was not fun. I used Python's IDLE editor for a bit, and have used Notepad++ a little as well.

{% enddetails %}

### Source control

{% details "Gittyup", "Windows, macOS, Linux"  %}

I currently use Gittyup as Git client, and it's okay, although not my favourite. I find it can be slow and unstable with large files, and the UI is confusing. I used to use GitHub desktop and preferred that, but it doesn't support Linux (ironic, for a company which is supposed to be about open source).

{% enddetails %}

{% details "Codeberg", "Web" %}

I like Codeberg a like: the foundation behind it seem really great, it's open-source, and the UI is much faster and better than GitHub's is now. Most projects are still on GitHub unfortunately, but hopefully more will move to different places.

{% enddetails %}