
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
		formSubmitClass: "",
		newNameText: 'initial val',
		appStyles: {
			marginTop: '25px',
			color: 'darkBlue'
		}

	},

		methods: {
			formSubmitted: function() {
				if(this.newNameText.length > 0) {
					console.log(this.newNameText)
					this.guestName.push(this.newNameText)
					this.newNameText = '',
					this.formSubmitClass = "submitted"

				}
			}
		}


});
