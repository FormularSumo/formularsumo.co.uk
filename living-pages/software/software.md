---
layout: article.html
title: Software
description: An attempt to collate the software I use and why
---

%contents%

## Maps

### CoMaps

<details>

Recently I've been using CoMaps, a non-profit fork of Organic maps, which someone recomended to me. I love that it's FOSS, based on OSM data (with decent built-in editing capabilities), and run by a transparent organisation. Being offline-first is interesting, as I've only used online first maps previously. It's got big advantages; things reliably load straight away, which is true of the whole app - it's increibly lightweight and fast, and seems to use around 5-10x less battery than Google Maps, while being far more private, and having a generally better UI. OSM has great walking and biking directions, and great map details (benches, bins, toilets, metro entrances/paths and accurate bus stops). Unfortunately, it does fall short in a few areas, for which I still use Google Maps.

The biggest drawback for me is public transport. I'm aware that other OSM-based maps do do this better, I intend to try more, but CoMaps only does metro systems. It does this reasonably well, it's entirely lacking heavy-rail and buses, so I often need to use another app to find out this information. Having data that's only updated once every few weeks is a bit of limitation as well. If someone closes a route, a destination, or adds data (I sometimes do this from the OpenStreetMaps website), it won't get reflected in the app for awhile. And unfortauntely there's no live information like transport arrival times or cancellations, works, traffic, anything like that, and no cross-device data syncing (eg, saved destinations). I also miss satellite view someties. Overall, amazing for active transport, less good for public transport and driving.

Platforms: Android (de-googled), iOS, Linux

</details>

### Google Maps
Google Maps is what I've used most my life, in no small part due to being pre-installed and un-installable on most Android phones, and it's fine. It probably has the most expansive database for businesses, and I do find the built-in reviews and photos (menus, prices, opening hours) useful - this is something I would like to have (optionally) integrated into more apps. It also usually has the best/most recent driving data and predictions, probably due to having the most users. I don't drive very much, so that's not particularly important to me, but the accurate and live public transport (in some areas it even shows buses on the map, alongside busy-ness) is very useful. Google Maps/Earth also has the best satellite view out there, it's considerably better quality than other services I've tried, and has excellent 3D modelling (although not on the native Maps app unfortuntely) as well. Being able to save locations and see them on other devices is nice, and I find the Chronology feature useful to see where and when I've gone.

On the flip side, it only works on Google'd Android and iOS. There is a generally functional website, but it doesn't do navigation, so can't act as a proper replacement for the native apps. The apps and data are propietary, so you can't easily use them anywhere else (other than embeds), which I think is a serious downside. Another really random flaw is that offline maps only work for driving.. which is incredibly useless for a lot of people. The number of times I've accidently hit the X button mid-route to then have Google Maps claim it can no longer find the directions I was just following means I've more or less stopped using it for walking now. It also only offers very limited information about places when offline - just the phone number and opening hours. Other issues include the aforementioned slowness/battery and poor walking directions.

Platforms: Google Android, iOS, semi-funcional Web App

### Other

I use the OpenStreetMaps website sometimes for viewing maps, as CoMaps only shows what's downloaded, and only shows details when you're quite zoomed in. I also use it for detailed editing which is quite fun. Unfortuantely it doesn't do navigation or work offline or anything like that, it's just a simple map, so it's not a replacement for anything else on this list. One thing it does do quite well is public transport maps, much better than Google Maps or CoMaps which only do metros. Surprisingly though, Apple Maps actually does this better than any others (at any zoom level with clear routes), and I occassionally use it exclusively for that. I briefly tried OSMAnd, but it was crazy slow, especially on Android, and quite confusing to use. It did do bus and more train directions though.

## Notes

### Cryptee

For the past ~9 months, Cryptee has been my note taking app of choice. It's excellent, it's super well-made, very easy to use, extremely fast and lightweight, well-designed, feature-rich, and as secure and private as you can get. There's very little I can fault it for. Being a good web app, it works flawlessly on any device - even some e-readers, and any modern browser, and has an open-source, verifiable front-end. The people who make it are very receptive to feedback, and I can say they have taken on board everything I've suggested.

For me, there's just two things stopping me from using this for everyting. Or maybe 3. The biggest annoyance is the lack of edit-locking/conflict-algo. What this means is that changes from one device do not sync to another until you reload the file, or sometimes the whole app. If you bear this in mind, it's not an issue, but if you're unaware, it can catch you out and possibly lead to data loss if you save over changes. The good news is that they're currently working on this, so hopefully in a year or two I'll be able to get rid of this. The main issue is that being full client-side encrypted, it's very hard to compare differences in files, but I'm sure they'll figure this out.

The second is that it's not quite as good for spontaneous note taking. Again, due to being client-side encrypted, it can take a beat to load if it's not already open in memory. 5-10 seconds depending on your device. Just long enough to interrupt what I'm doing. Add to this that you have to press the button to create a note, give it a name, and wait a second for it to create, and it means it's not quite as fast of an experience as it could be. Mostly this is a technological problem, not something that's easy to solve - they've already done a lot of work on improving it, but it does mean that I still tend to use Google Keep for very quick notes...

Platforms: web

### Google Keep

If Cryptee is a well-made app, Google Keep is the opposite. Its syncing is mind-bogglingly slow for the company which also makes Google Docs, especially for the website which takes a good 15 seconds on first-load (and still >5 on subsequent ones) - making Cryptee (despite its far more complex encyrption) look fast. It's very basic on features, and despite it having been over a year, they've still not got round to adding bold/italics/underline to the website, meaning that it just doesn't show and gets overriden if you edit from the website instead of the native mobile apps. There's a weird bug where the Android app just doesn't let me do anything sometimes (I reported awhile ago, but no updatse) until I force-close it, and as of writing this today it's been somehow crashing the whole keyboard on app change.

The only good thing I can really say - and the only reason I still use it - is that it's very simple. When you open the app, there's a new note already ready to go, you just tap on it and start writing. And (assuming you've already synced), the native mobile app does load instantly, meaning it's a very smooth process to create a new note or edit an existing one. So I use it for this, things like shopping lists, un-organised to-dos, my bugs-to-report list; things which aren't that important or organised. If/when Cryptee gets a bit faster (maybe a faster phone, better Crypto APIs in browser, etc) and perhaps has an easier flow to start writing notes, I'll probably ditch Google Keep.

Platforms: Google Android, iOS, mostly-functional web app

### Other

I used to use OneNote for journaling, just because it came pre-installed on my first laptop and advertised to me (there's a theme here..), but it's really bad. And confusing. There's a Windows Win32 app, a Windows UWP, and a Web App, all of which are slightly different with different capabilities - something which I find really annoying. They're also all quite slow and poorly made in my experience, including the native mobile apps. It's just a poor experience, especially when compared to something like Cryptee.

## Password Manager

### Bitwarden

## Email

### Thunderbird

## Search Engine

### Ecosia

There isn't too much to say on this category. I'd historically always used Google (briefly test Bing a few times), but hadn't used anything else for an extended period of time. Then last year I randomly decided to look into Ecosia, I'd heard of it a lot, but not investigated. Most people know it for the tree planting, and from everything I see, it does do this well. Unlike a lot of groups or governments, it's not just aimless tree planting, it's planting to right trees (natively) in areas where they're beneficial (more often than not working with natives peoples, eg farmers), and then looked after until maturity. But they don't just do tree planting, they also use some of their money for other climate projects, such as renewable energy, or home insulation (iirc). So I can't really think of a better place for my search revenue to be going towards. They're German a non-profit who spend everything they earn of their mission, and they seem to do it well. The search itself is fine, uses Bing and/or Google depending on the region, although they're currently building their own index with Quant, and the results are fine. Fortunately Gen AI answers are optional, easy to disable (unlike Google Search - fortunately I've missed all of that), and I don't have any major issues using it. The only real problem is that the results a bit slow - especially on Firefox. I should probably get in touch and ask about that, they already helped with a previous suggestion I had. I also don't really like that they try to get people to use their app instead of using it on their preferred browser, I think the whole practice of doing that harms browser competition and the market, but I understand it's a tricky position to be in when the mobile gatekeepers have made it much harder for users to change their search engines on mobile when compared to desktop, and it's unfortunately something that most engines do now do.

Platforms: all (officially supported across all browsers with the same functionality)

## Video Conferencing

### Jitsi Meet

## Podcasts

### Pocket Casts