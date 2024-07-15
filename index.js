const fetch = require("node-fetch");
class sufApi {
  constructor(ip) {
    if (!ip) throw Error(colors.red("[x] Please provide a server Ip"));
    this.ip = ip;
  }

  getHost() {
    const split = this.ip.split(":");
    return split[0];
  }

  getPort() {
    const split = this.ip.split(":");
    if (split.length >= 2) {
      return split[1];
    }
  }
  getServerStatus() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess("online");
        })
        .catch((err) => {
          sendSuccess("offline");
        });
    });
  }
  getPlayers() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/players.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getPlayersOnline() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/players.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.length);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getMaxPlayers() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.sv_maxClients);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getServerResources() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.resources);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getServerLocale() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.locale);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getServerTags() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.tags);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getServerVersion() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.version);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getServerDescription() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.sv_projectDesc);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getServerName() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.sv_projectName);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getFXServer() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.server);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getFXServer() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.server);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getLan() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.sv_lan);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getGameName() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.gamename);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getDiscord() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.Discord);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getOneSync() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.onesync_enabled);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getEnForceGameBuild() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.enforceGameBuild);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getPureLevel() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.sv_pureLevel);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getBannerConnecting() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.banner_connecting);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getBannerDetail() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.banner_detail);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getlicenseKeyToken() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.licenseKeyToken);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  getenhancedHostSupport() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.enhancedHostSupport);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
  enhancedHostSupport() {
    return new Promise((sendSuccess, sendError) => {
      fetch(`http://${this.ip}/info.json`)
        .then((res) => res.json())
        .then((body) => {
          sendSuccess(body.vars.enhancedHostSupport);
        })
        .catch((err) => {
          sendError(err);
        });
    });
  }
}
module.exports.sufApi = sufApi;
console.log(colors.green(`[+] Fivem API Active`));
