---
title: "Mount Files Between macOS and Linux"
date: 2026-07-11
tags:
  - macos
  - linux
  - sftp
  - samba
  - networking
---

This guide records the working setup for browsing and mounting files between a Mac and a Linux machine on the same local network.

## Connection details used

| Machine | Username | Local IP | Service |
| --- | --- | --- | --- |
| Mac | `mycomputer` | `192.168.100.234` | SSH/SFTP on port 22 |
| Linux | `taimour` | `192.168.100.244` | Samba/SMB on ports 445 and 139 |

Local IP addresses may change after reconnecting to the router. Re-run the address commands below if a saved connection stops working.

## Linux to Mac with Dolphin

### One-time setup on macOS

Open **System Settings → General → Sharing** and enable **Remote Login**. Ensure the Mac user is allowed access.

Confirm the short username, IP address, and Remote Login state in the Mac terminal:

```bash
whoami
ipconfig getifaddr en0
sudo systemsetup -getremotelogin
```

For this setup, the expected results are user `mycomputer`, IP `192.168.100.234`, and `Remote Login: On`.

### Connect from Linux

Paste this address into Dolphin's location bar:

```text
sftp://mycomputer@192.168.100.234/Users/mycomputer/
```

Enter the Mac login password when prompted. Dolphin can save it in KDE Wallet.

To test the connection from a terminal first:

```bash
ssh mycomputer@192.168.100.234
```

If the local OpenSSH configuration has incorrect ownership or permissions, bypass it temporarily for diagnosis:

```bash
ssh -F /dev/null mycomputer@192.168.100.234
```

### Optional SSHFS mount on Linux

If `sshfs` is installed:

```bash
mkdir -p ~/Mac
sshfs mycomputer@192.168.100.234:/Users/mycomputer ~/Mac
```

Unmount it with:

```bash
fusermount3 -u ~/Mac
```

## Mac to Linux with Finder

Finder does not natively mount SFTP URLs, so expose the Linux home directory as a private Samba share.

### One-time setup on Linux

Install Samba:

```bash
sudo apt-get install -y samba
```

Add this share to `/etc/samba/smb.conf`:

```ini
[Home]
   comment = Taimour Home
   path = /home/taimour
   browseable = yes
   read only = no
   guest ok = no
   valid users = taimour
   force user = taimour
   create mask = 0600
   directory mask = 0700
```

Validate the configuration, start Samba, and create the SMB password:

```bash
sudo testparm
sudo systemctl enable --now smbd
sudo smbpasswd -a taimour
```

The SMB password is the password entered in Finder; it can be the same as the Linux login password or a separate one.

### Connect from macOS

1. Open Finder and press `⌘K`, or choose **Go → Connect to Server**.
2. Enter `smb://192.168.100.244/Home`.
3. Choose **Registered User**.
4. Enter username `taimour` and the SMB password.
5. Enable **Remember this password in my keychain**.

The share appears under **Locations** in Finder. Drag it into the Finder sidebar for quick access.

## Troubleshooting

### Connection hangs or times out

Verify the current addresses.

On the Mac:

```bash
ipconfig getifaddr en0
```

On Linux:

```bash
hostname -I
```

KDE Connect working only proves that the devices can discover each other; SSH or Samba must still be enabled separately.

### Check the services

On the Mac:

```bash
sudo systemsetup -getremotelogin
```

On Linux:

```bash
systemctl is-active smbd
ss -ltn | grep -E ':(139|445) '
testparm -s
```

If a firewall is enabled on Linux, allow Samba only on the trusted local network profile.

## Result

- Linux opens the Mac home directory in Dolphin over SFTP.
- macOS opens the Linux home directory in Finder over SMB.
- Both connections require authenticated user accounts; guest access is disabled.
