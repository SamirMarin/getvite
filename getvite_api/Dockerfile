FROM python:3.7-alpine
WORKDIR /api
ENV FLASK_APP InitAPI.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST 0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
#driver for db test
RUN apk add postgresql-dev
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
