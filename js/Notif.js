function asknotif() {
    if (Notification.permission === "granted") {
        const notification = new Notification("Notifications activées pour Unoshop : recevez notre newsletter et soyez informé des dernières nouveautés !", {icon:'Images/Logo.png'});
      }
    
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            const notification = new Notification("Notifications activées pour Unoshop : recevez notre newsletter et soyez informé des dernières nouveautés !", {icon:'Images/Logo.png'});
          }
        });
}}

window.addEventListener('load', asknotif);