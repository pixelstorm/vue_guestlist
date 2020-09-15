
new Vue({

	el: '#app', 

	data: {

		event: {
			eventDate: 'August 14 2000',
			eventTitle: 'Summer Festival',
			eventDescription: 'a very fun event'
		},
		guestName: [],
		newNameText: 'initial val',
	},

		methods: {
			formSubmitted: function() {
				console.log(this.newNameText)
				this.guestName.push(this.newNameText)
				this.newNameText = ''
			}
		}


});
