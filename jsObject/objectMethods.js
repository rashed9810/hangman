let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function(partySize) {
       let seatsLeft = this.guestCapacity - this.guestCount;
       return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
       this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize) {
       this.guestCount = this.guestCount - partySize;
    }
 };
 
 let status = restaurant.checkAvailability(4); // Should return true because 75 - 73 = 2, which is greater than 4
 console.log(status);
 
 restaurant.seatParty(72); // guestCount becomes 73 + 72 = 145
 console.log(restaurant.checkAvailability(4)); // Should return false because 75 - 145 = -70, which is not greater than or equal to 4
 restaurant.removeParty(5); // guestCount becomes 145 - 5 = 140
 console.log(restaurant.checkAvailability(4)); // Should return true because 75 - 140 = -65, which is greater than or equal to 4
 