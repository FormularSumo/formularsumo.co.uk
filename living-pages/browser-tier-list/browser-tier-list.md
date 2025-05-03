---
layout: living-pages/browsers.html
title: Browser tier list
tier_list_generator: https://tiermaker.com/create/web-browser--16086681
browsers:
    A:
        Firefox:
            marketshare: 4.1
            pros: [
                "Good privacy and ethics",
                "Runs the only independent browser engine in use",
                "Generally seems to use less battery than Chromium-based browsers",
                "Highly customisable UI",
                "Works very well on Linux/Wayland",
                "Fully free/open-source"
            ]
            cons: [
                'Delays in adopting new features, especially related to PWAs/hardware access, and not enough money to fund development',
                "Although owned by a non-profit, the Mozilla Corporation still acts like a company, laying off employees for no particular reason, and making some quite questionable decisions over the past decade",
                "Website compatibility is sometimes lacking, sometimes due to websites (due to engine's small market share), sometimes due Firefox's delay in adding features."
            ]
            thoughts: ""

        Vivaldi:
            marketshare: 0.002
            pros: [
                "<a href='https://vivaldi.com/en/company/'>Owned by its employees</a>, who are in my experience lovely people (all the way up to the CEO). It does not accept exernal funding, does not chase rapid growth, and of all the browsers in this list has the most transparents and sustainable business mode.",
                "Known for its extremely customisable UI and powerful built-in tools, has inspired many other browsers in this regard",
                "Does a lot of good regulatory work, and one of its core missions is to help promote a free and open web, free from the control of gatekeepers",
                "Unlike many other browsers, takes quite a negative stance against gen AI, and does not try to force it into everything",
                "The only browser on this list based in Europe"
            ]
            cons: [
                "Does not have the engineering capacity or budget to <a href='https://chrome-commit-tracker.arthursonzogni.com/organizations/commits?repositories=chromium&organizations=Brave,Vivaldi&grouping=yearly&colors=organizations&kind=author&metric=commit&chart=bar&dates=2000-01-01,2025-04-02'>work much on its browser engine</a>",
            ]
            thoughts: ""

        
        # Tor [
        #     tier: "A",
        #     marketshare: "Unkown",
        #     pros: [
                
        #     ],
        #     cons: [
                
        #     ],
        #     thoughts: ""
        # ]

    B:
        Chrome: 
            marketshare: 63
            pros: [
                "Feature leadership",
                "One of the fastest and most secure browsers",
                "Best website compatibility",
                "Google the largest browser engineer team by quite a substantial margin, and does most of the work than goes into Chromium. As such they tend to have the fastest security and critial issue response teams"
            ]
            cons: [
                "Used to push a lot of other Google properties",
                "Poor privacy record and practices - business model is collecting and selling user data. See backtracking on phasing out 3p cookies recently.",
                "Moderate anti-competitive beheaviour, such as use self-preferencing from Google's websites (eg pre-installed Meet/Drive extensions), not providing WebAPKs for other Android browsers, forced/default-use in some Google native mobile apps",
                "Unlike most other browsers, does not support extensions on Android (presumably due to ad-blockers)",
                "Effective monopoly on ChromeOS at the moment",
                "UI is less customisable than most others"
            ]
            thoughts: ""

        Edge:
            marketshare: 7
            pros: [
                
            ]
            cons: [
                
            ]
            thoughts: ""

    C:
        Opera:
            tier: "C"
            marketshare: 1.5
            pros: [
            ]
            cons: [
                "Run by a Chinese billionaire and used as a vehicle for pushing their ad network, gaming business, news app, Fintech microlending etc",

            ]
            thoughts: ""

    D:
        Safari:
            marketshare: 17.5
            pros: [
                "One of the few browsers not powered by Chromium. However, this is because Google forked Webkit to create Chromium due to Apple's slow processes and prioritisation, and it's been largely left behind since then, with little to offer vs the other 2 browser engines while being less open and less cross-platform"
            ]
            cons: [
                "<a href='https://googleprojectzero.blogspot.com/2022/02/a-walk-through-project-zero-metrics.html#browsers'>Poor security record</a> and practices",
                "<a href='https://webventures.rejh.nl/blog/2024/history-of-safari-show-stoppers/'>Broken features and bugs</a>",
                "<a href='https://infrequently.org/2021/04/progress-delayed/'>Very late</a> (<a href='2https://wpt.fyi/results/'>or yet to</a>) support many things",
                "Apple platforms only - there’s an alright <a href='https://webkitgtk.org/'>community-maintained Linux port</a> but next to nothing for Windows and Android",
                "Tied to system updates, so if you don’t update your system or your device is no longer supported, Safari stops getting updated as well",
                "Apple is probably the most anti-web company there is, doing everything they can to hold it back (eg supressing iOS PWAs, notifications) and force people into their walled garden. A total ban on all other browser engines on iOS and their repeated malicious compliance with laws and court rulings does little to help this image"
            ]
            thoughts: ""

        Brave:
            marketshare: 1.1
            pros: [
                "Good on the privacy front: randomised user agents with minimal information leak makes it one of the most private browsers",
                "Fully free/open-source"
            ]
            cons: [
                "Constant push for NFTs, Crypto (Brave Attention Token/Wallet) and Web3",
                "As part of this, blurs the lines between sponserships and browser features, UI feels like an <a href='https://en.wikipedia.org/wiki/Brave_(web_browser)'>advert</a>",
                "Blocks ads by default, and replaces many of them with its own ad network, which pays creators much less while taking control away from them and forcing them to use Brave's cryptocurrency",
                "Currently owned by the 2 co-founders and propped up on venture-capital, although not much transparency around this",
                "The CEO and co-founder <a href='https://en.wikipedia.org/wiki/Brendan_Eich'>Brendan Eich</a> resigned from Mozilla due to opposing same-sex marriage, and more recently was in the spotlight for spreading Covid misinformation",
                "Does not have the engineering capacity or budget to <a href='https://chrome-commit-tracker.arthursonzogni.com/organizations/commits?repositories=chromium&organizations=Brave,Vivaldi&grouping=yearly&colors=organizations&kind=author&metric=commit&chart=bar&dates=2000-01-01,2025-04-02'>work much on its browser engine</a>",
            ]
            thoughts: ""

        Samsung Internet:
            marketshare: 2.3
            pros: [
                
            ]
            cons: [
                
            ]
            thoughts: ""

---
