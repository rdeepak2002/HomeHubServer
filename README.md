# HomeHubServer

## Autostart

On a Raspberry Pi 4 run the following command:

```sh
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

Then add the following line:

```sh
@lxterminal -e /home/pi/HomeHubServer/start.sh
```

### `npm install`

Installs node modules.

### `node index.js`

Runs the server.
