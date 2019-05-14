from django.conf.urls import url
from incidents import consumers

websocket_urlpatterns = [
	# the new urls go in here.
	url(r'^ws/$', consumers.UpdateConsumer)
]
