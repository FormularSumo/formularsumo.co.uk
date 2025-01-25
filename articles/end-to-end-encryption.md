---
title: End-To-End Encryption
date: 2022-03-15
description: A broad overview of how End-To-End Encryption works, and its advantages and drawbacks.
footnotes: [
    ' It seems to me that it should be possible to store your
    encryption/decryption keys somewhere, such as a password manager, and manually
    enter them without having your phone on hand, but as far as I’m aware there
    aren’t any services that let you do this.',
    ' These platforms exclusively use E2EE. Other platforms like
    Telegram allow you to create ‘secret chats’ using E2EE but don’t use it by 
    default. Facebook messenger recently rolled out end-to-end encryption but with
    the <a href="https://www.eff.org/deeplinks/2023/12/meta-announces-end-end-encryption-default-messenger"> amount of metadata collection </a> they do, and the fact that they encrypt the
    decryption key with a 6 digit pin, I didn’t think it appropriate to include.'
]
---

<p>
End-to-end encryption is probably a term you’ve come across before, but perhaps
not one you’re that familiar with. Nowadays, when data is sent over the
internet, it’s almost always encrypted beforehand. This scrambles the data into
seemingly random combinations of characters, using an encryption key. With the
matching decryption key however, the data can be unscrambled back into its
original form. This means that private information is kept private; nobody who
intercepts and reads the transmission is able to make sense of it. And with the
number of possibilities that the standard 256 bit encryption entails, using
brute force to unscramble the data (that is, to try out every combination of
decryption keys to find the right one) using current computers would take
<a href="https://www.ubiqsecurity.com/128bit-or-256bit-encryption-which-to-use/">
~200000000000000000000000x as long as the universe</a> has existed. Quantum
computers will likely pose a threat to our current encryption algorithms at some
point, although there are now
<a href="https://en.wikipedia.org/wiki/Post-quantum_cryptography#Implementation">
approaches to defend against this</a>, but for the time being, encryption simply
cannot be broken.
</p>
<p>
Standard encryption involves the data being sent between you and an app’s
servers being encrypted. Once the data arrives at the servers, it’s decrypted.
For most uses, this makes sense. You want your banking website to be about to
read your bank details. But sometimes, the data you're sending is not intended
for the service you’re using, but for another person that you're communicating with.
Using standard encryption, these messages or calls are decrypted by the server
of whatever communication platform you’re using, and then re-encrypted before being
sent to the recipient, meaning that this app can read your messages and listen in
on your calls if they so choose. Enter end-to-end encryption (E2EE). Using E2EE
means that only you and the recipient(s) have a copy of the decryption key,
meaning data remains encrypted as it passes through servers and can only be
decrypted once it arrives at its destination.
</p>
<p>
On the surface of it, E2EE seems great! Nobody except you and your friend(s) can
read your messages and listen in on your calls. Even if the messaging platform
experiences a data leak, 3rd parties will only be able to view encrypted
meaningless data. However, E2EE isn’t without its drawbacks. From a technical
perspective, it’s harder to implement. Say I want to message you from my laptop
instead of my phone, I can’t simply log into my messaging app and open up all my
messages, because they’re encrypted and the messaging app doesn’t know the
decryption key. I’d have to first link it to my phone by scanning a QR code or
similar.<sup><a id="n-1" href="#fn-1">[1]</a></sup> After that, they’ll stay linked, but if my decryption key
changes for whatever reason (e.g. I get a new phone), then I’ll have to redo the
process. Another problem is if you lose or break your phone. If you’ve backed up
your messages using E2EE, you won’t be able to view them on a new phone without
having the old phone on hand to set it up. Additionally, <a href="
https://signal.org/blog/how-to-build-encrypted-group-calls/">calling is also more
complicated</a>.
</p>
<p>
Still, while more complicated, E2EE can be used in place of standard encryption,
and already is in many products. WhatsApp, Signal and iMessage are some of the
most well known to use it<sup><a id="n-2" href="#fn-2">[2]</a></sup>. What I find
to be the more interesting debate is the ethical one. As much as I prefer not to
have all my messages stored on social media companies servers for them to do what
they like with, sometimes, them being able to view your messages and calls can be
a good thing. If you were to do something that breaks the rules of a social media
platform, it makes sense that the platform should be able to investigate this
and subsequently remove you from the platform. But more so than breaking the rules,
what if you were to do something illegal, such as child pornography/grooming or
planning and organising a crime that is later carried out. Surely a police
investigation should be able to have access to messages if it were needed to
help them in their investigation, right? I would argue that in a lot of cases,
it would still be possible to do this under E2EE. Say I were to report someone
on a platform, for breaking platform rules or doing something illegal, when I
hit the report button, it could send a copy of (part of) my message history with
that person to the social media platform or police agency, using the messages that
have already been decrypted onto my device. However, in the case of planning,
where no member of the group is going to be offering themselves up to be
reported, E2EE prevents platforms and police from being able to do anything
without physical access to the devices, whereas they might under standard
encryption. Yet at the same time, governments having uncontrolled access to
people’s messages can be a terrible thing. In so many countries in the world still,
things such as speaking out against the government, being gay or following/not
following a certain religion are considered crimes. In countries such as these,
E2EE could be the difference between life and death for someone who, from a Western
viewpoint, hasn’t done anything wrong. It could be a way of organising protest
against and ultimately bringing down immoral regimes. And that’s just the thing
with end-to-end encryption, it can be simultaneously used for good and for bad.
It really comes down to this: should privacy be a fundamental human right,
something that not even governments can take away from people?
</p>
