FROM python:3.12.5-slim

RUN apt-get clean && \
  apt-get update && \
  apt-get -y install \
  pkg-config \
  build-essential \
  default-libmysqlclient-dev

WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

WORKDIR /code/app
COPY ./app .

CMD ["uvicorn", "main:app", "--reload", "--port", "8088", "--host", "0.0.0.0"]
