class Utility {
  public normalizePort(port: any) {
    if (typeof port === "number" && port >= 0) {
      return port;
    } else if (typeof port === "number" && port < 0) {
      return 3000;
    } else if (isNaN(Number(port))) {
      return 3000;
    } else {
      return Number(port);
    }
  }
}

export const utils = new Utility();
