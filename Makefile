setup:
	docker-compose build
	docker-compose run --rm web bin/setup

up:
	docker-compose up -d
	./docker/sleep_until_app_ready
	docker-compose run --rm --service-ports web bin/rails s
