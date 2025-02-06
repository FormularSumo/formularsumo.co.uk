---
title: Encryption
date: 2022-03-15
description: A overview of the different types of encryption (server-side, client-side and end-to-end), and their use cases, advantages and drawbacks.
footnotes: [
    'This refers to <a
    href="https://en.wikipedia.org/wiki/Symmetric-key_algorithm">Symmetric-Key
    Encryption</a>, where the same key is used for both encryption and decrypting
    data. This is used for encrypting almost all data as it’s simple and fast,
    however it has the downside that you first need to securely share this key
    between the users or the user and the server. For this, <a
    href="https://en.wikipedia.org/wiki/Public-key_cryptography">Asymmetric-Key
    Encryption</a> is used, where you have both an encryption (public) key, and a
    mathematically linked decryption (private) key. You use the public key to
    encrypt something, which can only be decrypted with the private key, which
    cannot be derived from the public one. You can also do the reverse to “sign”
    this message and prove who it was sent from, as only a message (<a
    href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">hash</a>)
    encrypted with the private key will be decrypted correctly with the
    corresponding public one.',

    'As mentioned in footnote<sup><a href="#fn-1">1</a></sup>, there are actually two types
    of encryption. The methods traditionally used by Asymmetric-Key Encryption are
    considered vulnerable to quantum computers, hence the recent additions of <a
    href="https://en.wikipedia.org/wiki/Post-quantum_cryptography#Implementation">post-quantum
    algorithms</a> to protect against this. For Symmetric-Key Encryption however,
    this is usually not the case. The most efficient brute-forcing algorithm that
    has been designed for quantum computers is <a
    href="https://en.wikipedia.org/wiki/Grover%27s_algorithm">Grover’s algorithm</a>
    - considered <a
    href="https://en.wikipedia.org/wiki/Asymptotically_optimal_algorithm">asymptotically
    optimal</a> - which effectively provides a quadratic speed-up, reducing AES-256
    to the strength of AES-128, and AES-512 to AES-256. This theoretically means
    that if the key length is long enough (at least 256 bits), modern Symmetric-Key
    Encryption algorithms should be quantum-proof.',

    'The historical definition of end-to-end encryption was true to its
    name: encryption during transit between the sender and the destination (the two
    ends). This means that servers very much did have access to your description
    key, as they were one of these end points, and so end-to-end encryption
    technically speaking refers to encryption-during-transit (usually coupled with
    server-side encryption) as described beforehand in the article. Here’s <a
    href="https://web.archive.org/web/20160116160010/http://www.infosectoday.com/Articles/Client-Side_Encryption.htm#.VpppFbXP32c">an
    example</a> of this now outdated definition.',

    'Google Drive and iCloud now also <a
    href="https://en.wikipedia.org/wiki/Client-side_encryption#Details">have
    options</a> to do something like this, but it’s not enabled by default/available
    for all users and not as thorough.',

    'More specifically, your key and a <a
    href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt value</a> are
    passed through a computationally expensive <a
    href="https://en.wikipedia.org/wiki/Key_stretching">key stretching</a> process
    to produce a wrapping key, which encrypts your encryption key, which is then
    stored on their servers. This means that you can easily change your key without
    having to download, re-encrypt and re-upload all your data, and also means you
    can create a shorter more memorable key (starting from around 4 characters)
    which is equally secure (as brute-forcing it takes about as long, and it still
    can’t be leaked as only you know it). It’s a great system to improve usability
    and accessibility for all, as most users don’t wish to use a randomly generated
    256 bit encryption key to access their data. More services should be taking
    notes. Cryptee is also open source meaning you can <a
    href="https://github.com/cryptee/web-client">view the client-end code</a> to see
    how it works.',

    'WhatsApp, Google (Allo, later Messages+their RCS implementation),
    Facebook Messenger and iMessage are other examples, although all being closed
    source it’s harder to verify their implementations, and they’re generally
    slightly less secure in the name of user convenience. For example Messenger’s <a
    href="https://engineering.fb.com/wp-content/uploads/2023/12/TheLabyrinthEncryptedMessageStorageProtocol_12-6-2023.pdf">6
    digit passcodes</a> to access the encryption keys stored in their hardware
    security modules and WhatsApp’s similar approach to password-based backups, or
    Messenger’s use of a user’s Facebook ID in conjunction with 40-digit
    error-correcting recovery codes as an alternative to the above passcode
    approach.',

    'Personally I’ve been using Bitwarden for a few years since LastPass
    imposed some severe limitations on their free plan. I very highly recommend
    Bitwarden as it’s 1: fully open source and audited by many security experts, and
    2: provides free hosting for unlimited passwords, devices and all the necessary
    features of a password manager, or also allows self-hosting if you prefer. I
    <strong>do not</strong> recommend using a gatekeeper (operating
    system/browser/device - eg Apple or Google) password manager if you can avoid
    it, as they are usually designed to lock you into their ecosystems, and are
    typically less secure than good 3rd party alternatives. All the above applies in
    equal measure, if not more so (with regards to lock-in), for passkey management.',

    'Some of these services now offer zero-trust encrypted back-ups as
    well, such as Signal (always) or WhatsApp (optional), which are accessed using a
    password/encryption key that the user remembers or stores. However, in order to
    access these you need to set-up the new device as the new primary device and
    replace your old one, and if you don’t have your registered phone number in it,
    it will be set-up as a new account and presented as such to other people. This
    is a fundamental problem with phone-number based services: phone numbers are
    tied to a single device and using them in our multi-device world is an ugly
    retrofitting challenge. Phone numbers also require you to continually pay a
    company who you’ve effectively put in control of a large part of your digital
    identity. Account based services (above all <a
    href="https://en.wikipedia.org/wiki/Federation_(information_technology)">federated</a>
    services <a
    href="https://pluralistic.net/2024/11/02/ulysses-pact/#tie-yourself-to-a-federated-mast">without
    switching costs</a>), such as emails, are more equitable and better suited to
    the modern world, though we do need to come up with better authentication
    systems so users don’t have to deal with the computer-designed world of
    passwords<sup><a href="#fn-6">6<a/></sup>.',

    'For example, is (<a
    href="https://en.wikipedia.org/wiki/Abortion_law#/media/File:Abortion_Laws.svg">sometimes)</a>
    prosecuting people for abortion the “right thing”? I believe it’s not, but many
    countries do this, including more recently some US states, often with the help
    of communication services which do not employ zero-trust encryption.'
]
---

<p>
<em>This article is adapted from an older one published 15 June, 2022 on the
Portsmouth Point blog, titled </em><a
href="https://portsmouthpoint.blogspot.com/2022/06/end-to-end-encryption-in-messaging-apps.html">End-To-End
Encryption</a><em>. It’s more new than old, with lots of the technical details
fixed or updated (thanks a lot to <a href="https://johnozbay.com/bio">John
Ozbay</a> for taking the time to explain them to me), and some of the
conclusions and opinions changed to reflect my current views.</em>
</p>

<p>
Nowadays, when data is sent over the internet or stored on a server, it’s almost
always encrypted beforehand. This scrambles the data into seemingly random
combinations of characters, using an encryption key. Using this same encryption
key<sup><a id="n-1" href="#fn-1">1</a></sup> however, the data can be unscrambled back into its original
form. This means that private information is kept private; nobody who gains
access to and reads the encrypted information is able to make sense of it. With
the number of possibilities that the standard 256 bit encryption entails, using
brute force to unscramble this data (that is, to try out every combination of
decryption keys to find the right one) using current computers would take
roughly <a
href="https://www.ubiqsecurity.com/128bit-or-256bit-encryption-which-to-use/">200000000000000000000000x</a>
<a href="https://en.wikipedia.org/wiki/Brute-force_attack#Theoretical_limits">as
long</a> as the universe has existed. Quantum computers might one day pose a
threat to some of our current encryption algorithms<sup><a id="n-2" href="#fn-2">2</a></sup>, although there
are already approaches to defend against this, but for the time being,
encryption simply cannot be broken.
</p>
<p>
Most of the time, data is first encrypted during transit (eg using <a
href="https://en.wikipedia.org/wiki/Transport_Layer_Security">TLS</a>) between
your device and an app’s servers, using a <a
href="https://en.wikipedia.org/wiki/Session_key">temporary</a>, randomly
generated encryption key to do so. It’s then typically encrypted <em>by</em> and
stored on these servers, which is referred to as server-side encryption. This
means that said servers are able to decrypt and read this data, which for a lot
of use cases makes sense. You’d expect your banking website to be able to read
your requested transactions and update their records, for example. But
sometimes, the data you're sending is not intended for the service you’re using,
but just for yourself - such as note taking, or for another person that you're
communicating with - such as messaging. Using server-side encryption, this data
can be read by whatever service you’re using. They can choose to do whatever
they like with your information: sell it to advertisers, use it to build up a
profile of you, and perhaps use it to target other products and services at you.
But even if you trust this service not to misuse your private information, you
can’t trust that others won’t. If a 3rd party is able to get into their systems
somehow (through illegal or legal means) and access the stored encryption keys
alongside your data, then they’ll be able to decrypt and read it. Data leaks
like this are <a
href="https://en.wikipedia.org/wiki/List_of_data_breaches">hardly uncommon</a>,
whether through state-sponsored/political attacks, criminals in search of money,
human error, or simply people with too much free time on their hands.
</p>
<p>
The obvious solution to this is a system where encryption keys are <em>not</em>
known by the service you’re using, but just by you. This means that it is
physically, mathematically impossible that anyone else is able to access your
data unless you choose to share it with them, or unless you or your own device
are compromised. The technical term for this is <em>zero-trust</em>, as you
don’t need to trust the service you’re using to safeguard your data given that
they are unable to access it. Unfortunately this term is rarely used outside of
the industry. I assume that when launching the first mainstream zero-trust
services somebody from the marketing team went ‘look, I’m really sorry but we
just can’t call our secure messaging app “zero-trust”, that’s going to put
everyone right off’, and instead they <a
href="https://en.wikipedia.org/wiki/End-to-end_encryption#Modern_usage">co-opted
the term end-to-end encryption</a><sup><a id="n-3" href="#fn-3">3</a></sup>, as well as the more sensible but
less common <em><a
href="https://en.wikipedia.org/wiki/Client-side_encryption">client-side
encryption</a>.</em>
</p>
<p>
Let’s start with client-side encryption. Client-side encryption means that data
is encrypted by the client (your device), using a key which is not known to the
server. A great example of this is the note-taking and photo-storage app <a
href="https://crypt.ee/security">Cryptee</a><sup><a id="n-4" href="#fn-4">4</a></sup>. When creating an
account, you also create an encryption key, which is used to encrypt your data.
This encrypted data is then sent to and stored on their servers<sup><a id="n-5" href="#fn-5">5</a></sup>.
Cryptee never has access to the encryption key and cannot read your data.
Likewise, the modern definition of end-to-end encryption is a closely related
concept, as data is similarly encrypted on-device and inaccessible to the
server. The difference is that it’s used for communication services. End-to-end
encryption nowadays means that only you and other participant(s) have the
decryption key to be able to read your messages or listen in on your calls. A
well-known example of this is Signal, who’s open-source protocol is now used by
many other services as well<sup><a id="n-6" href="#fn-6">6</a></sup>.
</p>
<p>
On the surface of it, zero-trust encryption is great! Nobody except you and
other users you communicate with can access your data. Even if the service
you’re using experiences a data leak, third parties will only be able to view
encrypted meaningless data. However, these systems do come with some drawbacks.
From a technical perspective, it is a bit harder to implement. As well as
needing your login details/phone number to sign in, you <em>also</em> need your
encryption key to access your data. Encryption keys are typically 256 bits long.
There are methods to securely derive this key from a password-length key that
the user remembers<sup><a href="#fn-5">5</a>, <a href="#fn-6">6</a></sup>, but this still effectively means that two
passwords need to be remembered or saved. Passwords, and more generally human
error, are famously one of the weakest links in security - the average person at
any one time has <a
href="https://rmondello.com/2025/01/02/magic-links-and-passkeys/">0.8 correct
passwords in their memory</a>. Solutions to this can involve password managers,
which I’d strongly recommend everyone use<sup><a id="n-7" href="#fn-7">7</a></sup>, or passkeys, which are in
principle a great idea but <a
href="https://arstechnica.com/security/2024/12/passkey-technology-is-elegant-but-its-most-definitely-not-usable-security/">currently
a bit of a mess</a>. However, many zero-trust services instead assume that users
do not want to manage their encryption key, and indeed do not let them do so.
Signal and WhatsApp for example store your encryption key on-device, and if you
wish to use them on another device you need to first link that device to your
“primary device”, such as by scanning a QR code. This does manage to hide the
complexity of zero-trust encryption but it also significantly reduces the
flexibility of them. Should you wish to access your data/account but not have
access to the primary device it can be near-impossible to do so<sup><a id="n-8" href="#fn-8">8</a></sup>.
</p>
<p>
Still, while more complicated, zero-trust encryption can be used in place of
traditional server-side encryption, and already is in many places. The other
side of the equation is the ethical side of things. As with many tools, this
kind of privacy can be used for good, or for bad. It can be used for example for
organising protest and resistance under authoritarian regimes, or it can be used
for planning and carrying out crimes. It can be used to protect those who are in
danger due to their sexuality, religious beliefs, or political views, or it can
be used for <a
href="https://rainn.org/news/what-child-sexual-abuse-material-csam">child sexual
abuse material</a>. And so on and so forth. The problem is that it’s not
possible to separate out these use cases. Many governments and organisations
have proposed doing so, introducing so called <em>backdoors</em> to allow
<em>them</em> access to people’s data, but nobody else. But any kind of backdoor
- any kind of security hole - is a security hole that will eventually be
exploited by others. And even if you trust your government to always do the
“right thing”<sup><a id="n-9" href="#fn-9">9</a></sup>, there’s many which surely cannot be trusted. Even the
UN states that <a
href="https://www.un.org/en/about-us/universal-declaration-of-human-rights#Article-12:~:text=offence%20was%20committed.-,Article%2012,-No%20one%20shall">privacy
is a human right</a>. This is not to say that you can’t report things to law
enforcement and provide evidence to them or to others if you so wish. You still
have access to your data of course, so if you want to share it as part of this
process you can. “Report” buttons can still work under these systems, sending
the data which you have access to to the relevant agencies. But this should be
something which you have control over, rather than something which has the
potential to be exploited and accessed by anyone with the technical means to do
so.
</p>