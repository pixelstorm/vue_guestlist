
new Vue({

	el: '#app', 

	data: {

		event: {
			eventDate: 'August 14 2000',
			eventTitle: 'Summer Festival',
			signUpText: '<em>this is the sign up text</em>',
			eventDescription: 'a very fun event'
		},
		guestName: [],
		newNameText: 'initial val',
		appStyles: {
			marginTop: '25px',
			color: 'darkBlue'
		},
		eventCapacity: 5,
		eventCapacityPercentage: 0


	},

		methods: {
			formSubmitted: function() {
				if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
					console.log(this.newNameText)
					this.guestName.push(this.newNameText)
					this.newNameText = ''
					this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)

				}
			}
		}


});
