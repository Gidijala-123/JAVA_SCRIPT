class Mobile {
  constructor(brand, ram, batteryStatus, isCallInProgress, song) {
    this.brand = brand;
    this.ram = ram;
    this.batteryStatus = batteryStatus;
    this.isCallInProgress = isCallInProgress;
    this.song = song;
  }
  playMusic() {
    console.log(`Playing ${this.song} Song`);
  }
  stopMusic() {
    console.log("Music Stopped");
  }
  fullCharge() {
    if (this.batteryStatus < 100) {
      this.batteryStatus = 100;
      console.log("Mobile Fully Charged");
    } else if (this.batteryStatus == 100) {
      console.log("Mobile Already Fully Charged");
    }
  }
  makeCall() {
    this.isCallInProgress = true;
    console.log("Calling...");
  }
  endCall() {
    if (this.isCallInProgress === false) {
      console.log("No Ongoing Call to End");
    } else {
      console.log("Call Ended");
      this.isCallInProgress = false;
    }
  }
}
function main() {
  const brand = "Apple";
  const ram = "2Gb";
  const batteryStatus = parseInt(90);
  const song = "Waka Waka";
  const isCallInProgress = JSON.parse(false);
  const myMobile = new Mobile(
    brand,
    ram,
    batteryStatus,
    isCallInProgress,
    song
  );
  myMobile.fullCharge();
  myMobile.playMusic();
  myMobile.stopMusic();
  myMobile.endCall();
  myMobile.makeCall();
  myMobile.endCall();
}
main();
