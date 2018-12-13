FROM ruby:2.5.3

ENV LANG ja_JP.utf8
ENV APP_PATH=/usr/src/app

RUN apt-get update -qq && \
      apt-get install -y --no-install-recommends \
      libpq-dev \
      build-essential \
      apt-transport-https

RUN apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs

RUN mkdir -p ${APP_PATH}
WORKDIR ${APP_PATH}

COPY Gemfile \
     Gemfile.lock \
     ${APP_PATH}/

ENV BUNDLE_GEMFILE=${APP_PATH}/Gemfile \
    BUNDLE_JOBS=4

RUN bundle install
COPY . ${APP_PATH}
