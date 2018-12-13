up:
	docker-compose up -d
	./docker/sleep_until_app_ready
	docker-compose run --rm --service-ports web bundle exec foreman start
