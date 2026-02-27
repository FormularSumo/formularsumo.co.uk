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
<li>"Web" means that something is available as a web app which works well on all modern browsers and all common form factors</li>
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

## App stores/distribution

{% details "Web apps" %}

My preferred method of app distribution is through a Progresive Web App. Most of the apps I use on desktop are web apps (although I usually prefer to use them in the browser there rather than in standalone windows), and many of those I use on mobile are.

That being said, web apps will always lag slightly behind the bleeding edge of native apps functionality, and due to browsers' very strong sandboxing and interpreted environment, aren't appropriate for all types of apps (this is known as the 80/20 capababilities or Jobs To Be Done split).

{% enddetails %}

{% details "Native apps" %}

For one-off needs I don't mind downloading native apps directly from someone's website, but for things I use regularly I prefer app stores/repositories as they make updates easier.

I love Linux's model of separating the app store front from the distribution channels - known as repositories. It's a great way of being able to manage installs and updates from one place while avoiding centralising control through one giant corporation. On Linux I use Flatpacks a lot, and less frequently my OS's repositories and 3rd party ones that I add. I use the Synaptics package manager to help manage to different repositories and find new ones I'm looking for.

On Android I use F-Droid quite a lot, it follows a similar model to Linux's, but only contains FOSS software. I use the Droidify client as I prefer the design to the official F-Droid one, and helpfully it already includes a lot of 3rd party repositories which I sometimes use.

Aside from that, I use the Google Play Store and the Apple App Store when I need to, as many apps are only available from them on mobile. On iOS this is the only source of native apps I can use until my country's Competitions and Markets Authority (hopefully) gets round to forcing Apple to ends some of its anti-competitive practices, like is currently happening in the EU and other jurastictions. 

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

I use the OpenStreetMaps (OSM) web app for a few purposes. As CoMaps only shows detailed information for areas which you have downloaded, I use OSM if I want to see that for different areas that I want to explore. It's useful if I want to see want specific map view options, particularly the transport and cycling maps styles which are very good. And I use it for detailed OpenStreetMaps editing. It doesn't do navigation, it's just a simple map, but it's good at being that.

I use Google Earth sometimes for its satellite imagery, as it's considerably better than other options. It also has very good 3D object modelling which can be quite useful.

I occasionally use Apple Maps for it's excellent public transport map view, it's better than OpenStreetMaps, and far ahead of CoMaps (for the time being) or Google Maps. Otherwise I don't really use it unless I'm testing something out.

I have briefly tried OSMAnd, but it's ridiculously slow, especially on Android, and charging for certain features is not up my street.

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

{% details "Ecosia" %}

{% enddetails %}

## Video Conferencing

{% details "Jitsi Meet" %}

{% enddetails %}

## Podcasts

{% details "Pocket Casts" %}

{% enddetails %}