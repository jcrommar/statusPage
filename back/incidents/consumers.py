from channels.generic.websocket import AsyncWebsocketConsumer

class UpdateConsumer(AsyncWebsocketConsumer):
	async def connect(self):
		await self.channel_layer.group_add(
			'All',
			self.channel_name
		)
		await self.accept()	
