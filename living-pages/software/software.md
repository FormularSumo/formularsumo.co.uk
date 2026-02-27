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
<li>"Google Android" means that something is only (officially) available on Android devices with Google Play Services installed.</li>
<!-- <li>"All" means that something is available on at least Android, iOS, Windows, macOS and Linux desktop.</li> -->
</details>

%contents%

## Operating system

{% details "Linux" %}

I use Linux on my laptop and desktop. Currently this is KDE Neon (Ubuntu LTS-based), but I'm planning to move to a more stable distro (probably Fedora KDE edition) when I have time.

{% enddetails %}

{% details "Android" %}

I use Android on my main phone. Currently this is the default Google Pixel ROM, although I'm interested in trying degoogled Android at some point (I have been considering a Fairphone with /e/OS as my next phone), and I would like to find out more about (desktop) Linux-based phones.

{% enddetails %}

{% details "iOS" %}

I use an iPhone as a second phone. This is partially for development and testing purposes, such as websites I'm working on, or for the volunteering I do at Open Web Advocacy, and partially out of interest, as I like to be familiar with both ends of the mobile OS  duopoly.

{% enddetails %}

{% details "Other" %}

I dual boot Windows on both my laptop and desktop. As with iOS, this is mainly for development, testing and familiarity, although occasionally I need to use something which is only available on Windows (or macOS). 

I also have an old Chromebook I sometimes use for testing (mostly because it's *very* slow), or if I need a second laptop for some reason (such as calling somebody into a meeting).

I've only briefly used macOS on family/friend's devices, and didn't like it.

I've never used any BSD-based OS, nor KaiOS, although I would like to try both.

{% enddetails %}

## Browser

{% details "Firefox" %}

{% enddetails %}

{% details "Vivaldi" %}

I use Vivaldi for PWAs due to Firefox's poor support for them, I wrote more about this here:

{% enddetails %}


## Maps

{% details "CoMaps", "Android, iOS, Linux" %}

Nowadays, I use CoMaps for most of my mapping needs. It's an offline-first, private, free and open-source (FOSS) app based on and contributing back to OpenStreetMaps (OSM) data, and is run by a transparent non-profit and a lovely community. It's incredibly lightweight, fast, and battery-efficient, and has really good walking and biking directions. It's also got a great map design - very aesthetically pleasing, while being super detailed, with things like benches, bins, toilets, bike storage, and metro entrances/paths.

The biggest drawback for me is the public transport. CoMaps only works with metro systems at the moment - there's no support for buses or heavy rail. Another important issue the lack of live data. While offline-first is generally a good thing, it would be useful to be able to see eg live transport timetables, traffic, and temporary road closures. Along the same lines, I'd love an option to show photos and reviews from third-party sources, as this would be helpful when trying to decide *where* to go. It'd also be helpful to be able to sync saved locations between devices.

{% enddetails %}

{% details "Google Maps", "Google Android, iOS, semi-funcional website" %}

Due to Google's massive size and monopolistic practices, Google Maps has the largest userbase and subsequently the most data of any mapping service. Especially in less busy areas, Google Maps often has points of interest which don't exist on OpenStreetMaps or other services, or has more data about them, such as opening hours or contact details. Google's all-encompasing data collection also means that it tends to have the best driving data - as driving is much more depedent on unpredictable live conditions such as traffic, accidents and road closures than other forms of transport. It does do some aspects of public transport well: fairly reliable live timetables, and occasionally showing realtime bus locations along with how busy they are.

Despite all of Google's data and resources, there are some serious problems with Google Maps. Privacy is of course a big one, as are the limited platforms it supports. A particulary important one for me though is active transport. It's no secret that Google Maps is designed for (Northamerican) drivers. When walking or cycling, it frequently tries to send you down busy car routes, and the map design prioritises showing roads over all sorts of other information about a place. Offline maps only contain driving directions, and there's very limited info for points of interest when you don't have connection. The app is also very heavy to run, which is really noticeable on low-end devices. And I'm not a fan of Google's proprietary map database - I think maps should be open, public resources, and when I did used to contribute to Google Maps, many of my suggestions got rejected because the reviewers weren't able to "verify" them.

{% enddetails %}

{% details "Other" %}
Google Earth, OpenStreetMaps website, Apple Maps
{% enddetails %}

## Notes

{% details "Cryptee", "Web" %}

{% enddetails %}

{% details "Google Keep", "Google Android, iOS, mostly-funcional Web App" %}

{% enddetails %}

## Password Manager

{% details "Bitwarden" %}

{% enddetails %}

## Email

{% details "Thunderbird" %}

{% enddetails %}

## Search Engine

{% details "Ecosia", "All browsers" %}

{% enddetails %}

## Video Conferencing

{% details "Jitsi Meet" %}

{% enddetails %}

## Podcasts

{% details "Pocket Casts" %}

{% enddetails %}