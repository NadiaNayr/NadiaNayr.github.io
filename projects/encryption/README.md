# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 6
My Partner's Key: 7

Our initial shared key: 13

## Part 2: Messaging

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| Uv Gvzzl        |  Hi Timmy       | 13  |
| UCXUH L BC      |  Aidan R hi     | 20  |
| J hbtaa         |  U smell        | 15  |
| Easy One        |  Easy One       | 0   |

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

Select the first six characters from this message and copy them here:

Jo/h0Q

Using the ASCII table, convert these six characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

01001010 01101111 00101111 01101000 00110000 01010001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Aidan]
    Destination: [Tymur]  
    Sequence: 1/3
    Data: [01001010] [01101111]
    =========
    Packet 2:

    Source: [Aidan]
    Destination: [Tymur]
    Sequence: 2/3 
    Data: [00101111] [01101000]
    =========
    Packet 3:

    Source: [Aidan]
    Destination: [Tymur]
    Sequence: 3/3
    Data: [00110000] [01010001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

Symmetric encryption has one shared key while asymmetric thas 2 shared keys (public and private). We used asymmetric encryption to create a shared key. We used Asymmetric encryption (the caeser cypher) to exchange messages.

- Why is it important that this protocol uses a new key for each message?

It is important because it helps with security/secrecy.

- Why is it important that you never share your secret key?

It is important to not share your secret key so other people can't decrypt your messages.

- In the transport layer, do these messages use TCP or UDP? Why?

They use TCP because it is more reliable than UDP.

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.

After the data gets split into packets, the internet layer adds a header with the source and destination. When it goes to the link layer, it gets sent to the other device. Once it arrives, the message can be decrypted.

- This protocol successfully encrypts the **content** of the message. Even though an adversary in the middle can't read the content of the message, what other
information can they still see?

Despite them not being able to read the message, they can still find out where and when you sent it.
