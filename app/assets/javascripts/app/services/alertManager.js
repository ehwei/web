class AlertManager extends SFAlertManager {

  constructor($timeout) {
    super();
    this.$timeout = $timeout;
  }

  async alert({title, text, closeButtonText = "OK", onClose} = {}) {
    return new Promise((resolve, reject) => {
      let buttons = [
        {text: closeButtonText, style: "neutral", action: async () => {
          if(onClose) {
            this.$timeout(onClose);
          }
          resolve(true);
        }}
      ]
      let alert = new Stylekit.SKAlert({title, text, buttons});
      alert.present();
    })
  }

  async confirm({title, text, confirmButtonText = "Confirm", cancelButtonText = "Cancel", onConfirm, onCancel, destructive = false} = {}) {
    return new Promise((resolve, reject) => {
      let buttons = [
        {text: cancelButtonText, style: "neutral", action: async () => {
          if(onCancel) {
            this.$timeout(onCancel);
          }
          reject(false);
        }},
        {text: confirmButtonText, style: destructive ? "danger" : "info", action: async () => {
          if(onConfirm) {
            this.$timeout(onConfirm);
          }
          resolve(true);
        }},
      ];

      let alert = new Stylekit.SKAlert({title, text, buttons});
      alert.present();
    })
  }

}

angular.module('app').service('alertManager', AlertManager);
